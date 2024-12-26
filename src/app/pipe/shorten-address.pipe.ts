import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenAddress',
})
export class ShortenAddressPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    return `${value.substring(0, 6)}...${value.substring(value.length - 4)}`;
  }
}
