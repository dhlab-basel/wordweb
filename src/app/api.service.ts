import {Injectable} from "@angular/core";

export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  description: string;
  references: number;
}

export interface Book {
  id: number;
  title: string;
  authors: Author[];
  references: number;
}

export interface EditionOriginal {
  id: number;
  book: Book;
  language: Language;
  publicationInfo: string;
}

export interface Edition {
  id: number;
  book: Book;
  language: Language;
  publicationInfo: string;
}

export interface Passage {
  id: number;
  edition: Edition;
  text: string;
  page: string;
}

export interface PassageOriginal {
  id: number;
  edition: Edition;
  text: string;
  page: string;
}

export interface Language {
  id: number;
  language: string;
}

@Injectable({
  providedIn: "root"
})
export class ApiService {
  lang1: Language = {
    id: 1,
    language: "Englisch"
  };

  lang2: Language = {
    id: 2,
    language: "Deutsch"
  };

  lang3: Language = {
    id: 3,
    language: "Französisch"
  };

  lang4: Language = {
    id: 4,
    language: "Italienisch"
  };

  lang5: Language = {
    id: 5,
    language: "Spanisch"
  };

  a1: Author = {
    id: 1,
    firstName: "William",
    lastName: "Spakespeare",
    description: "English Dramatist",
    references: 0
  };

  a2: Author = {
    id: 2,
    firstName: "Christopher",
    lastName: "Marlowe",
    description: "English playwright and poet",
    references: 1
  };

  a3: Author = {
    id: 3,
    firstName: "Rosina Doyle",
    lastName: "Bulwer-Lytton",
    description: "English novelist",
    references: 3
  };

  a4: Author = {
    id: 4,
    firstName: "Samuel Taylor",
    lastName: "Coleridge",
    description: "English poet",
    references: 0
  };

  a5: Author = {
    id: 5,
    firstName: "William",
    lastName: "Barksted",
    description: "English poet and dramatist fl. 1611",
    references: 0
  };

  a6: Author = {
    id: 6,
    firstName: "George",
    lastName: "Chapman",
    description: "English poet, dramatist and Homer translator 1559?-1634",
    references: 0
  };

  a7: Author = {
    id: 7,
    firstName: "Marcus Tullius",
    lastName: "Cicero",
    description: "Roman politician, orator and philosopher 106-43",
    references: 0
  };

  a8: Author = {
    id: 8,
    firstName: "John",
    lastName: "Cotgrave",
    description: "English anthologist 1611?-1655?",
    references: 24
  };

  a9: Author = {
    id: 9,
    firstName: "Sir William",
    lastName: "D'Avenant",
    description: "English dramatist 1606-1668",
    references: 0
  };

  a10: Author = {
    id: 10,
    firstName: "Charles",
    lastName: "Dickens",
    description: "English novelist 1812-1870",
    references: 0
  };

  a11: Author = {
    id: 11,
    firstName: "Maria",
    lastName: "Edgeworth",
    description: "Anglo-Irish dramatist and novelist 1767-1849",
    references: 12
  };

  a12: Author = {
    id: 12,
    firstName: "David",
    lastName: "Garrick",
    description: "English actor 1717-1779",
    references: 6
  };

  a13: Author = {
    id: 13,
    firstName: "Elizabeth",
    lastName: "George",
    description: "U.S. crime writer b. 1949, pen-name for Susan Elizabeth George",
    references: 35
  };

  a14: Author = {
    id: 14,
    firstName: "Johann Wolfgang von",
    lastName: "Goethe",
    description: "German poet and dramatist 1748-1832",
    references: 21
  };

  a15: Author = {
    id: 15,
    firstName: "Robert",
    lastName: "Gott",
    description: "Australian cartoonist children's and crime writer b. 1957",
    references: 18
  };

  a16: Author = {
    id: 16,
    firstName: "Paul",
    lastName: "Green",
    description: "U.S. dramatist 1894-1981",
    references: 11
  };

  a17: Author = {
    id: 17,
    firstName: "Martha",
    lastName: "Grimes",
    description: "U.S. crime writer b. 1931",
    references: 16
  };

  a18: Author = {
    id: 18,
    firstName: "Thomas",
    lastName: "Hardy",
    description: "English novelist and poet 1840-1928",
    references: 38
  };

  a19: Author = {
    id: 19,
    firstName: "Gerhart",
    lastName: "Hauptmann",
    description: "German dramatist and novelist 1862-1942",
    references: 9
  };

  a20: Author = {
    id: 20,
    firstName: "William",
    lastName: "Hazlitt",
    description: "English critic and essayist 1778-1830",
    references: 340
  };

  a21: Author = {
    id: 21,
    firstName: "Lewis C.",
    lastName: "Henry",
    description: "U.S. (?) anthologist fl. 1961, real name Lewis Copeland",
    references: 33
  };

  a22: Author = {
    id: 22,
    firstName: "Aaron",
    lastName: "Hill",
    description: "British novelist and poet 1685-1750",
    references: 15
  };

  a23: Author = {
    id: 23,
    firstName: "Vladimír",
    lastName: "Holan",
    description: "Czech poet 1905-1980",
    references: 1
  };

  a24: Author = {
    id: 24,
    firstName: "Zora Neale",
    lastName: "Hurston",
    description: "U.S. novelist 1891-1960",
    references: 2
  };

  b1: Book = {
    id: 1,
    title: "Romeo and Juliet",
    authors: [this.a1, this.a8, this.a3],
    references: 0
  };

  e1: Edition = {
    id: 1,
    book: this.b1,
    language: this.lang1,
    publicationInfo: "Romeo and Juliet, W. Spakespeare, [not_original]"
  };

  pas1: Passage = {
    id: 1,
    edition: this.e1,
    text: "thus with a kiss I die",
    page: "2"
  };

  pas2: Passage = {
    id: 2,
    edition: this.e1,
    text: "My bounty is as boundless as the sea,\n" +
      "My love as deep; the more I give to thee,\n" +
      "The more I have, for both are infinite.",
    page: "101-102"
  };

  e1_original: EditionOriginal = {
    id: 1,
    book: this.b1,
    language: this.lang1,
    publicationInfo: "Romeo and Juliet, W. Spakespeare, [original]"
  };

  pas1_original: PassageOriginal = {
    id: 1,
    edition: this.e1_original,
    text: "[original] thus with a kiss I die",
    page: "2"
  };

  pas2_original: PassageOriginal = {
    id: 2,
    edition: this.e1_original,
    text: "[original] My bounty is as boundless as the sea,\n" +
      "My love as deep; the more I give to thee,\n" +
      "The more I have, for both are infinite.",
    page: "101-102"
  };

  b2: Book = {
    id: 2,
    title: "Hamlet",
    authors: [this.a1, this.a10],
    references: 2
  };

  e2: Edition = {
    id: 2,
    book: this.b2,
    language: this.lang1,
    publicationInfo: "Hamlet, W. Spakespeare, [not_original]"
  };

  pas3: Passage = {
    id: 3,
    edition: this.e2,
    text: "What a piece of work is a man! How noble in reason! how infinite in faculty! in form, in moving, how express and admirable! in action how like an angel! in apprehension how like a god! the beauty of the world! the paragon of animals! And yet, to me, what is this quintessence of dust?",
    page: "43-45"
  };

  pas4: Passage = {
    id: 4,
    edition: this.e2,
    text: "Though this be madness, yet there is method in't.",
    page: "90"
  };

  pas5: Passage = {
    id: 5,
    edition: this.e2,
    text: "Lord Polonius: What do you read, my lord? \n" +
      "Hamlet: Words, words, words. \n" +
      "Lord Polonius: What is the matter, my lord? \n" +
      "Hamlet: Between who? \n" +
      "Lord Polonius: I mean, the matter that you read, my lord.",
    page: "87-92"
  };

  e2_original: EditionOriginal = {
    id: 1,
    book: this.b2,
    language: this.lang1,
    publicationInfo: "The Tragedy of Hamlet, W. Spakespeare, [original]"
  };

  pas3_original: PassageOriginal = {
    id: 3,
    edition: this.e2_original,
    text: "[original] What a piece of work is a man! How noble in reason! how infinite in faculty! in form, in moving, how express and admirable! in action how like an angel! in apprehension how like a god! the beauty of the world! the paragon of animals! And yet, to me, what is this quintessence of dust?",
    page: "43-45"
  };

  pas4_original: PassageOriginal = {
    id: 4,
    edition: this.e2_original,
    text: "[original] Though this be madness, yet there is method in't.",
    page: "90"
  };

  pas5_original: PassageOriginal = {
    id: 5,
    edition: this.e2_original,
    text: "[original] Lord Polonius: What do you read, my lord? \n" +
      "Hamlet: Words, words, words. \n" +
      "Lord Polonius: What is the matter, my lord? \n" +
      "Hamlet: Between who? \n" +
      "Lord Polonius: I mean, the matter that you read, my lord.",
    page: "87-92"
  };

  b3: Book = {
    id: 3,
    title: "The Comedy of Errors",
    authors: [this.a1],
    references: 6
  };

  e3: Edition = {
    id: 3,
    book: this.b3,
    language: this.lang1,
    publicationInfo: "The Comedy of Errors, W. Spakespeare, [not_original]"
  };

  pas6: Passage = {
    id: 6,
    edition: this.e3,
    text: "A heavier task could not have been imposed\n" +
      "Than I to speak my griefs unspeakable;\n" +
      "Yet, that the world may witness that my end\n" +
      "Was wrought by nature, not by vile offence,\n" +
      "I'll utter what my sorrow gives me leave.",
    page: "129"
  };

  pas7: Passage = {
    id: 7,
    edition: this.e3,
    text: "A doubtful warrant of immediate death,\n" +
      "Which though myself would gladly have embraced,\n" +
      "Yet the incessant weepings of my wife,\n" +
      "Weeping before for what she saw must come,\n" +
      "And piteous plainings of the pretty babes,\n" +
      "That mourned for fashion, ignorant what to fear,\n" +
      "Forced me to seek delays for them and me.",
    page: "205-207"
  };

  e3_original: EditionOriginal = {
    id: 3,
    book: this.b3,
    language: this.lang1,
    publicationInfo: "The Comedy of Errors, W. Spakespeare, [original]"
  };

  pas6_original: PassageOriginal = {
    id: 6,
    edition: this.e3_original,
    text: "[original] A heavier task could not have been imposed\n" +
      "Than I to speak my griefs unspeakable;\n" +
      "Yet, that the world may witness that my end\n" +
      "Was wrought by nature, not by vile offence,\n" +
      "I'll utter what my sorrow gives me leave.",
    page: "129"
  };

  pas7_original: PassageOriginal = {
    id: 7,
    edition: this.e3_original,
    text: "[original] A doubtful warrant of immediate death,\n" +
      "Which though myself would gladly have embraced,\n" +
      "Yet the incessant weepings of my wife,\n" +
      "Weeping before for what she saw must come,\n" +
      "And piteous plainings of the pretty babes,\n" +
      "That mourned for fashion, ignorant what to fear,\n" +
      "Forced me to seek delays for them and me.",
    page: "205-207"
  };

  b4: Book = {
    id: 4,
    title: "Tamburlaine",
    authors: [this.a2],
    references: 1
  };

  e4: Edition = {
    id: 4,
    book: this.b4,
    language: this.lang2,
    publicationInfo: "Tamburlaine, C. Marlowe, [not_original]"
  };

  pas8: Passage = {
    id: 8,
    edition: this.e4,
    text: "I hold the Fates bound fast in iron chains,\n" +
      "And with my hand turn Fortune's wheel about;",
    page: "14"
  };

  pas9: Passage = {
    id: 9,
    edition: this.e4,
    text: "Well, bark, ye dogs; I'll bridle all your tongues",
    page: "4"
  };

  e4_original: EditionOriginal = {
    id: 4,
    book: this.b4,
    language: this.lang3,
    publicationInfo: "Tamburlaine, C. Marlowe, [original]"
  };

  pas8_original: PassageOriginal = {
    id: 8,
    edition: this.e4_original,
    text: "[original] I hold the Fates bound fast in iron chains,\n" +
      "And with my hand turn Fortune's wheel about;",
    page: "14"
  };

  pas9_original: PassageOriginal = {
    id: 9,
    edition: this.e4_original,
    text: "[original] Well, bark, ye dogs; I'll bridle all your tongues",
    page: "4"
  };

  // List of resources
  bookList: Book[];
  authorList: Author[];
  editionList: Edition[];
  editionOriginalList: EditionOriginal[];
  passageList: Passage[];
  passageOriginalList: PassageOriginal[];
  languageList: Language[];

  // Converts list to objects with id as keys
  objBooks: any = {};
  objAuthors: any = {};
  objEditions: any = {};
  objEditionOriginals: any = {};
  objPassages: any = {};
  objPassagesOriginal: any = {};
  objLanguages: any = {};

  constructor() {
    this.bookList = [this.b1, this.b2, this.b3, this.b4];
    this.objBooks = this.bookList.reduce((acc, cur) => {
      acc[cur.id] = cur;
      return acc;
    }, {});

    this.authorList = [
      this.a1, this.a2, this.a3, this.a4, this.a5, this.a6, this.a7, this.a8, this.a9, this.a10, this.a11, this.a12,
      this.a13, this.a14, this.a15, this.a16, this.a17, this.a18, this.a19, this.a20, this.a21, this.a22, this.a23, this.a24];
    this.objAuthors = this.authorList.reduce((acc, cur) => {
      acc[cur.id] = cur;
      return acc;
    }, {});

    this.editionList = [this.e1, this.e2, this.e3, this.e4];
    this.objEditions = this.editionList.reduce((acc, cur) => {
      acc[cur.id] = cur;
      return acc;
    }, {});

    this.passageList = [this.pas1, this.pas2, this.pas3, this.pas4, this.pas5, this.pas6, this.pas7, this.pas8, this.pas9];
    this.objPassages = this.passageList.reduce((acc, cur) => {
      acc[cur.id] = cur;
      return acc;
    }, {});

    this.editionOriginalList = [this.e1_original, this.e2_original, this.e3_original, this.e4_original];
    this.objEditionOriginals = this.editionOriginalList.reduce((acc, cur) => {
      acc[cur.id] = cur;
      return acc;
    }, {});

    this.passageOriginalList = [this.pas1_original, this.pas2_original, this.pas3_original, this.pas4_original, this.pas5_original, this.pas6_original, this.pas7_original, this.pas8_original, this.pas9_original];
    this.objPassagesOriginal = this.passageOriginalList.reduce((acc, cur) => {
      acc[cur.id] = cur;
      return acc;
    }, {});

    this.languageList = [this.lang1, this.lang2, this.lang3, this.lang4, this.lang5];
    this.objLanguages = this.languageList.reduce((acc, cur) =>  {
      acc[cur.id] = cur;
      return acc;
    }, {});
  }

  getBook(iri: number) {
    return this.objBooks[iri] ? this.objBooks[iri] : {};
  }

  getBooks() {
    return this.bookList;
  }

  getAuthor(iri: number) {
    return this.objAuthors[iri] ? this.objAuthors[iri] : {};
  }

  getAuthors() {
    return this.authorList;
  }

  getEdition(iri: number) {
    return this.objEditions[iri] ? this.objEditions[iri] : {};
  }

  getEditions() {
    return this.editionList;
  }

  getPassage(iri: number) {
    return this.objPassages[iri] ? this.objPassages[iri] : {};
  }

  getPassages() {
    return this.passageList;
  }

  getEditionOriginal(iri: number) {
    return this.objEditionOriginals[iri] ? this.objEditionOriginals[iri]: {};
  }

  getEditionsOriginal() {
    return this.editionOriginalList;
  }

  getPassageOriginal(iri: number) {
    return this.objPassagesOriginal[iri] ? this.objPassagesOriginal[iri] : {};
  }

  getPassagesOriginal() {
    return this.passageOriginalList;
  }

  getLanguage(iri: number) {
    return this.objLanguages[iri] ? this.objLanguages[iri] : {};
  }

  getLanguages() {
    return this.languageList;
  }
}