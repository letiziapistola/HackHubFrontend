/**
 * Questa pipe potrebbe essere eliminata se il calcolo si fa già nel codice, da vedere come sarà il back-end
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: string | Date): string {
    const date = typeof value === 'string' ? new Date(value) : value;
    const now = new Date();
    const secondsAgo = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (secondsAgo < 60) {
      return 'proprio adesso';
    }

    const minutesAgo = Math.floor(secondsAgo / 60);
    if (minutesAgo < 60) {
      return `${minutesAgo} minut${minutesAgo > 1 ? 'i' : 'o'} fa`;
    }

    const hoursAgo = Math.floor(minutesAgo / 60);
    if (hoursAgo < 24) {
      return `${hoursAgo} or${hoursAgo > 1 ? 'e' : 'a'} fa`;
    }

    const daysAgo = Math.floor(hoursAgo / 24);
    if (daysAgo < 30) {
      return `${daysAgo} giorn${daysAgo > 1 ? 'i' : 'o'} fa`;
    }

    const monthsAgo = Math.floor(daysAgo / 30);
    if (monthsAgo < 12) {
      return `${monthsAgo} mes${monthsAgo > 1 ? 'i' : 'e'} fa`;
    }

    const yearsAgo = Math.floor(monthsAgo / 12);
    return `${yearsAgo} ann${yearsAgo > 1 ? 'i' : 'o'} fa`;
  }
}
