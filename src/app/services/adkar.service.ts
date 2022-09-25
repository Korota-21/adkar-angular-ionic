/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Idker, DkerType } from '../interfaces/idker';

@Injectable({
  providedIn: 'root'
})
export class AdkarService {

  adker: Idker[] = [
    {
      text: `أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ
      اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ.`,
      count: 1,
      type: [DkerType.evening, DkerType.morning],
      info: ` [آية الكرسى - البقرة 255].
      من قالها حين يصبح أجير من الجن حتى يمسى ومن قالها حين يمسى أجير من الجن حتى يصبح. `
    },
    {
      text: `بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم
      قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ.
      `,
      info: `من قالها حين يصبح وحين يمسى كفته من كل شىء (الإخلاص والمعوذتين)`,
      count: 3,
      type: [DkerType.evening],
    },
  ];
  currentAdkarType: DkerType = DkerType.morning;
  public currentAdkarTypeChange: BehaviorSubject<DkerType> = new BehaviorSubject<DkerType>(this.currentAdkarType);

  constructor() {
    //TODO change DkerType as what the time is now
   }
  setCurrentAdkarType(type: DkerType) {
    this.currentAdkarTypeChange.next(type);
  }
  getAdkar(type: DkerType): Idker[] {
    return this.adker.filter((dker) => dker.type.includes(type));
  }

}

