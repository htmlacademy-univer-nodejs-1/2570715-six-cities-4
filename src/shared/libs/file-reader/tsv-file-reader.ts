import { FileReader } from './file-reader.interface.js';
import { readFileSync } from 'node:fs';
import { Offer, OfferType } from '../../types/index.js';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filename: string
  ) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t'))
      .map(([title, description, createdDate, cityName, previewUrl, images, isPremium, isFavorite, rating, type, bedrooms, maxAdults, price, goods, hostName, hostEmail]) => ({
        title,
        description,
        postDate: new Date(createdDate),
        city: { name: cityName },
        previewUrl,
        images: images.split(';'),
        isPremium: JSON.parse(isPremium),
        isFavorite: JSON.parse(isFavorite),
        rating: Number(rating),
        type: OfferType[type as 'Apartment' | 'House' | 'Room' | 'Hotel'],
        bedrooms: Number.parseInt(bedrooms, 10),
        maxAdults: Number.parseInt(maxAdults, 10),
        price: Number(price),
        goods: goods.split(';'),
        host: { name: hostName, email: hostEmail },
      }));
  }
}
