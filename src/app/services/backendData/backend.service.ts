import {Injectable} from "@angular/core";
import {
    Book,
    Language,
    Author,
    Edition,
    Organisation,
    Venue,
    PassageOriginal,
    EditionOriginal,
    Passage,
    Subject,
    Contributor, Lexia, Genre
} from "../../model/model";

@Injectable({
    providedIn: "root"
})
export class BackendService {

    private lang1: Language = {
        id: 1,
        name: "Englisch",
        order: 0,
        references: 10
    };

    private lang2: Language = {
        id: 2,
        name: "Deutsch",
        order: 0,
        references: 1
    };

    private lang3: Language = {
        id: 3,
        name: "Französisch",
        order: 0,
        references: 0
    };

    private lang4: Language = {
        id: 4,
        name: "Italienisch",
        order: 0,
        references: 0
    };

    private lang5: Language = {
        id: 5,
        name: "Spanisch",
        order: 0,
        references: 0
    };

    private v1: Venue = {
        id: 1,
        name: "Blackfriars",
        city: "London",
        order: 0,
        references: 123
    };

    private v2: Venue = {
        id: 2,
        name: "The Theatre",
        city: "London",
        order: 0,
        references: 21
    };

    private v3: Venue = {
        id: 3,
        name: "Cockpit",
        city: "London",
        order: 0,
        references: 23
    };

    private v4: Venue = {
        id: 4,
        name: "The Curtain",
        city: "London",
        order: 0,
        references: 7
    };

    private v5: Venue = {
        id: 5,
        name: "Whitefriars",
        city: "London",
        order: 0,
        references: 0
    };

    private v6: Venue = {
        id: 6,
        name: "Red Bull",
        city: "London",
        order: 0,
        references: 3
    };

    private v7: Venue = {
        id: 7,
        name: "Then Rose",
        city: "London",
        order: 0,
        references: 0
    };

    private v8: Venue = {
        id: 8,
        name: "Ludlow Castle",
        city: "Shropshire",
        order: 0,
        references: 3
    };

    private org1: any = {
        id: 1,
        name: "King's Men",
        order: 0,
        references: 17
    };

    private org2: any = {
        id: 2,
        name: "Lord Chamberlain's (Lord Hunsdon's) Men",
        order: 0,
        references: 4
    };

    private org3: any = {
        id: 3,
        name: "Children of the Chapel Royal",
        order: 0,
        references: 9
    };

    private org4: any = {
        id: 4,
        name: "Worcester's Men",
        order: 0,
        references: 0
    };

    private org5: any = {
        id: 5,
        name: "Derby's Men",
        order: 0,
        references: 7
    };

    private org6: any = {
        id: 6,
        name: "Oxford's Men",
        order: 0,
        references: 22
    };

    private org7: any = {
        id: 7,
        name: "Pembroke's Men",
        order: 0,
        references: 18
    };

    private a1: Author = {
        id: 1,
        internalID: "&000001",
        firstName: "William",
        lastName: "Shakespeare",
        description: "English Dramatist",
        birthDate: 1564,
        deathDate: 1616,
        order: 0,
        references: 0
    };

    private a2: Author = {
        id: 2,
        internalID: "&000002",
        firstName: "Christopher",
        lastName: "Marlowe",
        description: "English playwright and poet",
        birthDate: 1564,
        deathDate: 1593,
        order: 0,
        references: 1
    };

    private a3: Author = {
        id: 3,
        internalID: "&000003",
        firstName: "Rosina Doyle",
        lastName: "Bulwer-Lytton",
        description: "English novelist",
        birthDate: 1802,
        deathDate: 1882,
        order: 0,
        references: 3
    };

    private a4: Author = {
        id: 4,
        internalID: "&000004",
        firstName: "Samuel Taylor",
        lastName: "Coleridge",
        description: "English poet",
        birthDate: 1772,
        deathDate: 1834,
        order: 0,
        references: 0
    };

    private a5: Author = {
        id: 5,
        internalID: "&000005",
        firstName: "William",
        lastName: "Barksted",
        description: "English poet and dramatist fl. 1611",
        birthDate: null,
        deathDate: null,
        order: 0,
        references: 0
    };

    private a6: Author = {
        id: 6,
        internalID: "&000006",
        firstName: "George",
        lastName: "Chapman",
        description: "English poet, dramatist and Homer translator 1559?-1634",
        birthDate: 1559,
        deathDate: 1634,
        order: 0,
        references: 0
    };

    private a7: Author = {
        id: 7,
        internalID: "&000007",
        firstName: "Marcus Tullius",
        lastName: "Cicero",
        description: "Roman politician, orator and philosopher 106-43",
        birthDate: -106,
        deathDate: 43,
        order: 0,
        references: 0
    };

    private a8: Author = {
        id: 8,
        internalID: "&000008",
        firstName: "John Byrne Leicester Warren, Baron de",
        lastName: "Cotgrave",
        description: "English anthologist 1611?-1655?",
        birthDate: 1611,
        deathDate: 1655,
        order: 0,
        references: 24
    };

    private a9: Author = {
        id: 9,
        internalID: "&000009",
        firstName: "Sir William",
        lastName: "D'Avenant",
        description: "English dramatist 1606-1668",
        birthDate: 1606,
        deathDate: 1668,
        order: 0,
        references: 0
    };

    private a10: Author = {
        id: 10,
        internalID: "&000010",
        firstName: "Charles",
        lastName: "Dickens",
        description: "English novelist 1812-1870",
        birthDate: 1812,
        deathDate: 1870,
        order: 0,
        references: 0
    };

    private a11: Author = {
        id: 11,
        internalID: "&000011",
        firstName: "Maria",
        lastName: "Edgeworth",
        description: "Anglo-Irish dramatist and novelist 1767-1849",
        birthDate: 1767,
        deathDate: 1849,
        order: 0,
        references: 12
    };

    private a12: Author = {
        id: 12,
        internalID: "&000012",
        firstName: "David",
        lastName: "Garrick",
        description: "English actor 1717-1779",
        birthDate: 1717,
        deathDate: 1779,
        order: 0,
        references: 6
    };

    private a13: Author = {
        id: 13,
        internalID: "&000013",
        firstName: "Elizabeth",
        lastName: "George",
        description: "U.S. crime writer b. 1949, pen-name for Susan Elizabeth George",
        birthDate: 1949,
        deathDate: null,
        order: 0,
        references: 35
    };

    private a14: Author = {
        id: 14,
        internalID: "&000014",
        firstName: "Johann Wolfgang von",
        lastName: "Goethe",
        description: "German poet and dramatist 1748-1832",
        birthDate: 1748,
        deathDate: 1832,
        order: 0,
        references: 21
    };

    private a15: Author = {
        id: 15,
        internalID: "&000015",
        firstName: "Robert",
        lastName: "Gott",
        description: "Australian cartoonist children's and crime writer b. 1957",
        birthDate: 1957,
        deathDate: null,
        order: 0,
        references: 18
    };

    private a16: Author = {
        id: 16,
        internalID: "&000016",
        firstName: "Paul",
        lastName: "Green",
        description: "U.S. dramatist 1894-1981",
        birthDate: 1894,
        deathDate: 1981,
        order: 0,
        references: 11
    };

    private a17: Author = {
        id: 17,
        internalID: "&000017",
        firstName: "Martha",
        lastName: "Grimes",
        description: "U.S. crime writer b. 1931",
        birthDate: 1931,
        deathDate: null,
        order: 0,
        references: 16
    };

    private a18: Author = {
        id: 18,
        internalID: "&000018",
        firstName: "Thomas",
        lastName: "Hardy",
        description: "English novelist and poet 1840-1928",
        birthDate: 1840,
        deathDate: 1928,
        order: 0,
        references: 38
    };

    private a19: Author = {
        id: 19,
        internalID: "&000019",
        firstName: "Gerhart",
        lastName: "Hauptmann",
        description: "German dramatist and novelist 1862-1942",
        birthDate: 1862,
        deathDate: 1942,
        order: 0,
        references: 9
    };

    private a20: Author = {
        id: 20,
        internalID: "&000020",
        firstName: "William",
        lastName: "Hazlitt",
        description: "English critic and essayist 1778-1830",
        birthDate: 1778,
        deathDate: 1830,
        order: 0,
        references: 340
    };

    private a21: Author = {
        id: 21,
        internalID: "&000021",
        firstName: "Lewis C.",
        lastName: "Henry",
        description: "U.S. (?) anthologist fl. 1961, real name Lewis Copeland",
        birthDate: null,
        deathDate: null,
        order: 0,
        references: 33
    };

    private a22: Author = {
        id: 22,
        internalID: "&000022",
        firstName: "Aaron",
        lastName: "Hill",
        description: "British novelist and poet 1685-1750",
        birthDate: 1685,
        deathDate: 1750,
        order: 0,
        references: 15
    };

    private a23: Author = {
        id: 23,
        internalID: "&000023",
        firstName: "Vladimír",
        lastName: "Holan",
        description: "Czech poet 1905-1980",
        birthDate: 1905,
        deathDate: 1980,
        order: 0,
        references: 1
    };

    private a24: Author = {
        id: 24,
        internalID: "&000024",
        firstName: "Zora Neale",
        lastName: "Hurston",
        description: "U.S. novelist 1891-1960",
        birthDate: 1891,
        deathDate: 1960,
        order: 0,
        references: 2
    };

    private b1: any = {
        id: 1,
        internalID: "@000100",
        title: "Romeo and Juliet",
        authors: [this.a1.id, this.a8.id, this.a3.id],
        venues: [this.v1.id],
        organisations: [this.org3.id],
        order: 0,
        references: 0
    };

    private e1: any = {
        id: 1,
        book: 1,
        language: 1,
        publicationInfo: "Romeo and Juliet, W. Shakespeare, [not_original]",
        order: 0,
        references: 0
    };

    private pas1: any = {
        id: 1,
        edition: 1,
        text: "thus with a kiss I die",
        page: "2",
        order: 0,
        references: 0
    };

    private pas2: any = {
        id: 2,
        edition: 1,
        text: "My bounty is as boundless as the sea,\n" +
            "My love as deep; the more I give to thee,\n" +
            "The more I have, for both are infinite.",
        page: "101-102",
        order: 0,
        references: 0
    };

    private e1_original: any = {
        id: 1,
        book: 1,
        language: 1,
        publicationInfo: "Romeo and Juliet, W. Shakespeare, [original]",
        order: 0,
        references: 3
    };

    private pas1_original: any = {
        id: 1,
        edition: 1,
        text: "[original] thus with a kiss I die",
        page: "2",
        order: 0,
        references: 1
    };

    private pas2_original: any = {
        id: 2,
        edition: 1,
        text: "[original] My bounty is as boundless as the sea,\n" +
            "My love as deep; the more I give to thee,\n" +
            "The more I have, for both are infinite.",
        page: "101-102",
        order: 0,
        references: 2
    };

    private b2: any = {
        id: 2,
        internalID: "@000200",
        title: "Hamlet",
        authors: [this.a1.id, this.a10.id],
        venues: [this.v3.id],
        organisations: [this.v1.id],
        order: 0,
        references: 2
    };

    private e2: any = {
        id: 2,
        book: 2,
        language: 1,
        publicationInfo: "Hamlet, W. Shakespeare, [not_original]",
        order: 0,
        references: 0
    };

    private pas3: any = {
        id: 3,
        edition: 2,
        text: "What a piece of work is a man! How noble in reason! how infinite in faculty! in form, in moving, how express and admirable! in action how like an angel! in apprehension how like a god! the beauty of the world! the paragon of animals! And yet, to me, what is this quintessence of dust?",
        page: "43-45",
        order: 0,
        references: 0
    };

    private pas4: any = {
        id: 4,
        edition: 2,
        text: "Though this be madness, yet there is method in't.",
        page: "90",
        order: 0,
        references: 0
    };

    private pas5: any = {
        id: 5,
        edition: 2,
        text: "Lord Polonius: What do you read, my lord? \n" +
            "Hamlet: Words, words, words. \n" +
            "Lord Polonius: What is the matter, my lord? \n" +
            "Hamlet: Between who? \n" +
            "Lord Polonius: I mean, the matter that you read, my lord.",
        page: "87-92",
        order: 0,
        references: 0
    };

    private e2_original: any = {
        id: 1,
        book: this.b2,
        language: this.lang1,
        publicationInfo: "The Tragedy of Hamlet, W. Shakespeare, [original]",
        order: 0,
        references: 6
    };

    private pas3_original: any = {
        id: 3,
        edition: 2,
        text: "[original] What a piece of work is a man! How noble in reason! how infinite in faculty! in form, in moving, how express and admirable! in action how like an angel! in apprehension how like a god! the beauty of the world! the paragon of animals! And yet, to me, what is this quintessence of dust?",
        page: "43-45",
        order: 0,
        references: 2
    };

    private pas4_original: any = {
        id: 4,
        edition: 2,
        text: "[original] Though this be madness, yet there is method in't.",
        page: "90",
        order: 0,
        references: 0
    };

    private pas5_original: any = {
        id: 5,
        edition: 2,
        text: "[original] Lord Polonius: What do you read, my lord? \n" +
            "Hamlet: Words, words, words. \n" +
            "Lord Polonius: What is the matter, my lord? \n" +
            "Hamlet: Between who? \n" +
            "Lord Polonius: I mean, the matter that you read, my lord.",
        page: "87-92",
        order: 0,
        references: 0
    };

    private b3: any = {
        id: 3,
        internalID: "@000300",
        title: "The Comedy of Errors",
        authors: [this.a1.id],
        venues: [this.v6.id],
        organisations: [this.org5.id],
        order: 0,
        references: 6
    };

    private e3: any = {
        id: 3,
        book: 3,
        language: 1,
        publicationInfo: "The Comedy of Errors, W. Shakespeare, [not_original]",
        order: 0,
        references: 0
    };

    private pas6: any = {
        id: 6,
        edition: 3,
        text: "A heavier task could not have been imposed\n" +
            "Than I to speak my griefs unspeakable;\n" +
            "Yet, that the world may witness that my end\n" +
            "Was wrought by nature, not by vile offence,\n" +
            "I'll utter what my sorrow gives me leave.",
        page: "129",
        order: 0,
        references: 0
    };

    private pas7: any = {
        id: 7,
        edition: 3,
        text: "A doubtful warrant of immediate death,\n" +
            "Which though myself would gladly have embraced,\n" +
            "Yet the incessant weepings of my wife,\n" +
            "Weeping before for what she saw must come,\n" +
            "And piteous plainings of the pretty babes,\n" +
            "That mourned for fashion, ignorant what to fear,\n" +
            "Forced me to seek delays for them and me.",
        page: "205-207",
        order: 0,
        references: 0
    };

    private e3_original: any = {
        id: 3,
        book: 3,
        language: 1,
        publicationInfo: "The Comedy of Errors, W. Shakespeare, [original]",
        order: 0,
        references: 10
    };

    private pas6_original: any = {
        id: 6,
        edition: 3,
        text: "[original] A heavier task could not have been imposed\n" +
            "Than I to speak my griefs unspeakable;\n" +
            "Yet, that the world may witness that my end\n" +
            "Was wrought by nature, not by vile offence,\n" +
            "I'll utter what my sorrow gives me leave.",
        page: "129",
        order: 0,
        references: 5
    };

    private pas7_original: any = {
        id: 7,
        edition: 3,
        text: "[original] A doubtful warrant of immediate death,\n" +
            "Which though myself would gladly have embraced,\n" +
            "Yet the incessant weepings of my wife,\n" +
            "Weeping before for what she saw must come,\n" +
            "And piteous plainings of the pretty babes,\n" +
            "That mourned for fashion, ignorant what to fear,\n" +
            "Forced me to seek delays for them and me.",
        page: "205-207",
        order: 0,
        references: 2
    };

    private b4: any = {
        id: 4,
        internalID: "@000400",
        title: "Tamburlaine",
        authors: [this.a2.id],
        venues: [this.v4.id],
        organisations: [this.org1.id],
        order: 0,
        references: 1
    };

    private e4: any = {
        id: 4,
        book: 4,
        language: 2,
        publicationInfo: "Tamburlaine, C. Marlowe, [not_original]",
        order: 0,
        references: 0
    };

    private pas8: any = {
        id: 8,
        edition: 4,
        text: "I hold the Fates bound fast in iron chains,\n" +
            "And with my hand turn Fortune's wheel about;",
        page: "14",
        order: 0,
        references: 0
    };

    private pas9: any = {
        id: 9,
        edition: 4,
        text: "Well, bark, ye dogs; I'll bridle all your tongues",
        page: "4",
        order: 0,
        references: 0
    };

    private e4_original: any = {
        id: 4,
        book: this.b4,
        language: this.lang3,
        publicationInfo: "Tamburlaine, C. Marlowe, [original]",
        order: 0,
        references: 3
    };

    private pas8_original: any = {
        id: 8,
        edition: 4,
        text: "[original] I hold the Fates bound fast in iron chains,\n" +
            "And with my hand turn Fortune's wheel about;",
        page: "14",
        order: 0,
        references: 8
    };

    private pas9_original: any = {
        id: 9,
        edition: 4,
        text: "[original] Well, bark, ye dogs; I'll bridle all your tongues",
        page: "4",
        order: 0,
        references: 12
    };

    private b5: any = {
        id: 5,
        internalID: "@000500",
        title: "Of Two Evils Choose the Least",
        authors: [this.a12.id, this.a19.id],
        venues: [this.v2.id, this.v8.id],
        organisations: [this.org4.id],
        order: 0,
        references: 1
    };

    private b6: any = {
        id: 6,
        internalID: "@000600",
        title: "The Cruel Brother",
        authors: [this.a10.id],
        venues: [this.v2.id],
        organisations: [this.org3.id, this.org7.id],
        order: 0,
        references: 1
    };

    private b7: any = {
        id: 7,
        internalID: "@000700",
        title: "The Art of Reason",
        authors: [this.a22.id],
        venues: [],
        organisations: [],
        order: 0,
        references: 1
    };

    private b8: any = {
        id: 8,
        internalID: "@000800",
        title: "Five Hundred Points of Good Husbandry",
        authors: [this.a6.id, this.a9.id],
        venues: [this.v1.id],
        organisations: [this.org1.id],
        order: 0,
        references: 1
    };

    private b9: any = {
        id: 9,
        internalID: "@000900",
        title: "Treatise of God's Effectual Calling",
        authors: [this.a20.id],
        venues: [],
        organisations: [],
        order: 0,
        references: 1
    };

    private b10: any = {
        id: 10,
        internalID: "@001000",
        title: "The Jews' Tragedy",
        authors: [this.a22.id],
        venues: [this.v5.id],
        organisations: [this.org2.id],
        order: 0,
        references: 1
    };

    private s1: Subject = {
        id: 1,
        name: "Art, architecture, music",
        order: 0,
        references: 0
    };

    private s2: Subject = {
        id: 2,
        name: "History, (auto-)biography",
        order: 0,
        references: 0
    };

    private s3: Subject = {
        id: 3,
        name: "Literary and Cultural Studies",
        order: 0,
        references: 0
    };

    private s4: Subject = {
        id: 4,
        name: "Linguistics",
        order: 0,
        references: 0
    };

    private s5: Subject = {
        id: 5,
        name: "Politics, law, economics",
        order: 0,
        references: 0
    };

    private con1: Contributor = {
        id: 1,
        firstName: "Regula",
        lastName: "Hohl",
        email: "r.hohl@unibas.ch",
        order: 0,
        references: 22
    };

    private con2: Contributor = {
        id: 2,
        firstName: "Stefanie",
        lastName: "Heeg",
        email: "s.heeg@unibas.ch",
        order: 0,
        references: 10
    };

    private con3: Contributor = {
        id: 3,
        firstName: "Elliot",
        lastName: "Reitzer",
        email: "elliot@yahoo.de",
        order: 0,
        references: 10
    };

    private con4: Contributor = {
        id: 4,
        firstName: "Christian",
        lastName: "Gebhard",
        email: "christian.gebhard@stud.unibas.ch",
        order: 0,
        references: 10
    };

    private con5: Contributor = {
        id: 5,
        firstName: "Christian",
        lastName: "Eichenberger",
        email: "christianmarkus.eichenberger@unifr.ch",
        order: 0,
        references: 10
    };

    private con6: Contributor = {
        id: 6,
        firstName: "Ursula",
        lastName: "Caci",
        email: "ursula.caci@unibas.ch",
        order: 0,
        references: 10
    };

    private con7: Contributor = {
        id: 7,
        firstName: "Mark",
        lastName: "Hunter",
        email: "hardguenni@gmx.de, hyperhamlet@boriskuehne.net",
        order: 0,
        references: 10
    };

    private con8: Contributor = {
        id: 8,
        firstName: "Pauline",
        lastName: "Sallis",
        email: "pjsallis@yahoo.co.uk",
        order: 0,
        references: 10
    };

    private con9: Contributor = {
        id: 9,
        firstName: "Sebastian",
        lastName: "Refardt",
        email: "sebastian.refardt@stud.unibas.ch",
        order: 0,
        references: 10
    };

    private con10: Contributor = {
        id: 10,
        firstName: "Thierry",
        lastName: "Spampinato",
        email: "thierry.spampinato@unibas.ch",
        order: 0,
        references: 1
    };

    private lex1: Lexia = {
        id: 1,
        internalID: "#002007",
        lexia: "moist hand indicating arousal",
        order: 0,
        references: 1
    };

    private lex2: Lexia = {
        id: 2,
        internalID: "#002082",
        lexia: "I have lived too long",
        order: 0,
        references: 1

    };

    private lex3: Lexia = {
        id: 3,
        internalID: "#000787",
        lexia: "devil haunting in the likeness of sb",
        order: 0,
        references: 1
    };

    private lex4: Lexia = {
        id: 4,
        internalID: "#001082",
        lexia: "IMAGE - music as perfect harmony",
        order: 0,
        references: 1
    };

    private lex5: Lexia = {
        id: 5,
        internalID: "#000007",
        lexia: "pampered jades",
        order: 0,
        references: 1
    };

    private lex6: Lexia = {
        id: 6,
        internalID: "#001000",
        lexia: "brain of a cat",
        order: 0,
        references: 1
    };

    private lex7: Lexia = {
        id: 7,
        internalID: "#002084",
        lexia: "IMAGE - walled in with something beautiful",
        order: 0,
        references: 1
    };

    private lex8: Lexia = {
        id: 8,
        internalID: "#002013",
        lexia: "IMAGE - woman is like a jewel hanging in (Ethiop's) ear",
        order: 0,
        references: 1
    };

    private lex9: Lexia = {
        id: 9,
        internalID: "#002067",
        lexia: "great person's revenue on back",
        order: 0,
        references: 1
    };

    private lex10: Lexia = {
        id: 10,
        internalID: "#000064",
        lexia: "IMAGE - sea can't wash bloody hands",
        order: 0,
        references: 1
    };

    private lex11: Lexia = {
        id: 11,
        internalID: "#002077",
        lexia: "no other proof",
        order: 0,
        references: 1
    };

    private lex12: Lexia = {
        id: 12,
        internalID: "#000792",
        lexia: "give out my Anne is sick",
        order: 0,
        references: 1
    };

    private lex13: Lexia = {
        id: 13,
        internalID: "#002046",
        lexia: "cannot brook these",
        order: 0,
        references: 1
    };

    private lex14: Lexia = {
        id: 14,
        internalID: "#001016",
        lexia: "cannot abide gaping pig",
        order: 0,
        references: 1
    };

    private lex15: Lexia = {
        id: 15,
        internalID: "#000116",
        lexia: "prophetic soul",
        order: 0,
        references: 1
    };

    private lex16: Lexia = {
        id: 16,
        internalID: "#000766",
        lexia: "adulterate beast",
        order: 0,
        references: 1
    };

    private lex17: Lexia = {
        id: 17,
        internalID: "#000335",
        lexia: "Hic et ubique - here, there and everywhere",
        order: 0,
        references: 1
    };

    private lex18: Lexia = {
        id: 18,
        internalID: "#005005",
        lexia: "SETPIECE - To be or not to be",
        order: 0,
        references: 1
    };

    private lex19: Lexia = {
        id: 19,
        internalID: "#000292",
        lexia: "oh what a falling off",
        order: 0,
        references: 1
    };

    private lex20: Lexia = {
        id: 20,
        internalID: "#001124",
        lexia: "idle weed",
        order: 0,
        references: 0
    };

    // List of resources
    private readonly bookList: any[];
    private readonly authorList: any[];
    private readonly editionList: any[];
    private readonly editionOriginalList: any[];
    private readonly passageList: any[];
    private readonly passageOriginalList: any[];
    private readonly languageList: any[];
    private readonly venueList: any[];
    private readonly organisationList: any[];
    private readonly subjectList: any[];
    private readonly contributorList: any[];
    private readonly lexiaList: any[];

    // Converts allAuthors to objects with id as keys
    private readonly objBooks: any = {};
    private readonly objAuthors: any = {};
    private readonly objEditions: any = {};
    private readonly objEditionOriginals: any = {};
    private readonly objPassages: any = {};
    private readonly objPassagesOriginal: any = {};
    private readonly objLanguages: any = {};
    private readonly objVenues: any = {};
    private readonly objOrganisation: any = {};
    private readonly objSubjects: any = {};
    private readonly objContributors: any = {};
    private readonly objLexia: any = {};

    constructor() {
        this.authorList = [
            this.a1, this.a2, this.a3, this.a4, this.a5, this.a6,
            this.a7, this.a8, this.a9, this.a10, this.a11, this.a12,
            this.a13, this.a14, this.a15, this.a16, this.a17, this.a18,
            this.a19, this.a20, this.a21, this.a22, this.a23, this.a24
        ];
        this.objAuthors = this.authorList.reduce((acc, cur) => {
            acc[cur.id] = cur;
            return acc;
        }, {});

        this.bookList = [this.b1, this.b2, this.b3, this.b4, this.b5, this.b6, this.b7, this.b8, this.b9, this.b10];
        this.objBooks = this.bookList.reduce((acc, cur) => {
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
        this.objLanguages = this.languageList.reduce((acc, cur) => {
            acc[cur.id] = cur;
            return acc;
        }, {});

        this.venueList = [this.v1, this.v2, this.v3, this.v4, this.v5, this.v6, this.v7, this.v8];
        this.objVenues = this.venueList.reduce((acc, cur) => {
            acc[cur.id] = cur;
            return acc;
        }, {});

        this.organisationList = [this.org1, this.org2, this.org3, this.org4, this.org5, this.org6, this.org7];
        this.objOrganisation = this.organisationList.reduce((acc, cur) => {
            acc[cur.id] = cur;
            return acc;
        }, {});

        this.subjectList = [this.s1, this.s2, this.s3, this.s4, this.s5];
        this.objSubjects = this.subjectList.reduce((acc, cur) => {
            acc[cur.id] = cur;
            return acc;
        }, {});

        this.contributorList = [this.con1, this.con2, this.con3, this.con4, this.con5, this.con6, this.con7, this.con8, this.con9, this.con10];
        this.objContributors = this.contributorList.reduce((acc, cur) => {
            acc[cur.id] = cur;
            return acc;
        }, {});

        this.lexiaList = [this.lex1, this.lex2, this.lex3, this.lex4, this.lex5, this.lex6, this.lex7, this.lex8, this.lex9, this.lex10, this.lex11, this.lex12, this.lex13, this.lex14, this.lex15, this.lex16, this.lex17, this.lex18, this.lex19, this.lex20];
        this.objLexia = this.lexiaList.reduce((acc, cur) => {
            acc[cur.id] = cur;
            return acc;
        }, {});
    }

    getBook(iri: number, references: boolean) {
        if (!this.objBooks[iri]) {
            return {};
        }

        const copyBook = JSON.parse(JSON.stringify(this.objBooks[iri]));

        if (references) {
            const authors = [];
            const venues = [];
            const organistaions = [];

            for (const author of this.objBooks[iri].authors) {
                authors.push(this.getAuthor(author, true));
            }

            for (const venue of this.objBooks[iri].venues) {
                venues.push(this.getVenue(venue, true));
            }

            for (const organisation of this.objBooks[iri].organisations) {
                organistaions.push(this.getOrganisation(organisation, true));
            }

            copyBook.authors = authors;
            copyBook.venues = venues;
            copyBook.organisations = organistaions;
        }

        return copyBook;
    }

    getBooks(references: boolean) {
        let copyBookList = JSON.parse(JSON.stringify(this.bookList));

        if (references) {
            copyBookList = copyBookList.map(book => {
                return this.getBook(book.id, true);
            });
        }

        return copyBookList;
    }

    getAuthor(iri: number, references: boolean) {
        if (!this.objAuthors[iri]) {
            return {};
        }

        return JSON.parse(JSON.stringify(this.objAuthors[iri]));
    }

    getAuthors(references: boolean) {
        let copyAuthorList = JSON.parse(JSON.stringify(this.authorList));

        if (references) {
            copyAuthorList = copyAuthorList.map(author => {
                return this.getAuthor(author.id, true);
            });
        }

        // Sort after internalID
        // copyAuthorList.sort((a, b) => (a.internalID > b.internalID) ? 1 : ( (b.internalID > a.internalID) ? -1 : 0));

        return copyAuthorList;
    }

    getEdition(iri: number, references: boolean) {
        if (!this.objEditions[iri]) {
            return {};
        }

        const copyEdition = JSON.parse(JSON.stringify(this.objEditions[iri]));

        if (references) {
            copyEdition.book = this.getBook(this.objEditions[iri].book, false);
            copyEdition.language = this.getLanguage(this.objEditions[iri].language, false);
        }

        return copyEdition;
    }

    getEditions(references: boolean) {
        let copyEditionList = JSON.parse(JSON.stringify(this.editionList));

        if (references) {
            copyEditionList = copyEditionList.map(edition => {
                return this.getEdition(edition.id, true);
            });
        }

        return copyEditionList;
    }

    getPassage(iri: number, references: boolean) {
        if (!this.objPassages[iri]) {
            return {};
        }

        const copyPassage = JSON.parse(JSON.stringify(this.objPassages[iri]));

        if (references) {
            copyPassage.edition = this.getEdition(this.objPassages[iri].edition, false);
        }

        return copyPassage;
    }

    getPassages(references: boolean) {
        let copyPassageList = JSON.parse(JSON.stringify(this.passageList));

        if (references) {
            copyPassageList = copyPassageList.map(passage => {
                return this.getPassage(passage.id, true);
            });
        }

        return copyPassageList;
    }

    getEditionOriginal(iri: number, references: boolean) {
        if (!this.objEditionOriginals[iri]) {
            return {};
        }

        const copyEditionOriginal = JSON.parse(JSON.stringify(this.objEditionOriginals[iri]));

        if (references) {
            copyEditionOriginal.book = this.getBook(this.objEditionOriginals[iri].book, false);
            copyEditionOriginal.language = this.getLanguage(this.objEditionOriginals[iri].language, false);
        }

        return copyEditionOriginal;
    }

    getEditionsOriginal(references: boolean) {
        let copyEditionOriginalList = JSON.parse(JSON.stringify(this.editionOriginalList));

        if (references) {
            copyEditionOriginalList = copyEditionOriginalList.map(editionOr => {
                return this.getEditionOriginal(editionOr.id, true);
            });
        }

        return copyEditionOriginalList;
    }

    getPassageOriginal(iri: number, references: boolean) {
        if (!this.objPassagesOriginal[iri]) {
            return {};
        }

        const copyPassageOriginal = JSON.parse(JSON.stringify(this.objPassagesOriginal[iri]));

        if (references) {
            copyPassageOriginal.edition = this.getEditionOriginal(this.objPassagesOriginal[iri].edition, false);
        }

        return copyPassageOriginal;
    }

    getPassagesOriginal(references: boolean) {
        let copyPassageOriginalList = JSON.parse(JSON.stringify(this.passageOriginalList));

        if (references) {
            copyPassageOriginalList = copyPassageOriginalList.map(passageOr => {
                return this.getPassageOriginal(passageOr.id, true);
            });
        }

        return copyPassageOriginalList;
    }

    getLanguage(iri: number, references: boolean) {
        if (!this.objLanguages[iri]) {
            return {};
        }

        return JSON.parse(JSON.stringify(this.objLanguages[iri]));
    }

    getLanguages(references: boolean) {
        let copyLanguageList = JSON.parse(JSON.stringify(this.languageList));

        if (references) {
            copyLanguageList = copyLanguageList.map(language => {
                return this.getLanguage(language.id, true);
            });
        }

        return copyLanguageList;
    }

    getVenue(iri: number, references: boolean) {
        if (!this.objVenues[iri]) {
            return {};
        }

        return JSON.parse(JSON.stringify(this.objVenues[iri]));
    }

    getVenues(references: boolean) {
        let copyVenueList = JSON.parse(JSON.stringify(this.venueList));

        if (references) {
            copyVenueList = copyVenueList.map(venue => {
                return this.getVenue(venue.id, true);
            });
        }

        return copyVenueList;
    }

    getOrganisation(iri: number, references: boolean) {
        if (!this.objOrganisation[iri]) {
            return {};
        }

        return JSON.parse(JSON.stringify(this.objOrganisation[iri]));
    }

    getOrganisations(references: boolean) {
        let copyOrganisationList = JSON.parse(JSON.stringify(this.organisationList));

        if (references) {
            copyOrganisationList = copyOrganisationList.map(organisation => {
                return this.getOrganisation(organisation.id, true);
            });
        }

        return copyOrganisationList;
    }

    getSubject(iri: number, references: boolean) {
        if (!this.objSubjects[iri]) {
            return {};
        }

        return JSON.parse(JSON.stringify(this.objSubjects[iri]));
    }

    getSubjects(references: boolean) {
        let copySubjectList = JSON.parse(JSON.stringify(this.subjectList));

        if (references) {
            copySubjectList = copySubjectList.map(subject => {
                return this.getSubject(subject.id, true);
            });
        }

        return copySubjectList;
    }

    getContributor(iri: number, references: boolean) {
        if (!this.objContributors[iri]) {
            return {};
        }

        return JSON.parse(JSON.stringify(this.objContributors[iri]));
    }

    getContributors(references: boolean) {
        let copyContributorList = JSON.parse(JSON.stringify(this.contributorList));

        if (references) {
            copyContributorList = copyContributorList.map(contributor => {
                return this.getContributor(contributor.id, true);
            });
        }

        return copyContributorList;
    }

    getLexia(iri: number, references: boolean) {
        if (!this.objLexia[iri]) {
            return {};
        }

        return JSON.parse(JSON.stringify(this.objLexia[iri]));
    }

    getLexias(references: boolean) {
        let copyLexiaList = JSON.parse(JSON.stringify(this.lexiaList));

        if (references) {
            copyLexiaList = copyLexiaList.map(lexia => {
                return this.getLexia(lexia.id, true);
            });
        }

        return copyLexiaList;
    }

    getGenres(references: boolean) {
        const genres = [{
            id: 1,
            name: "Fiction",
            references: 0,
            lists: [{
                id: 1,
                name: "Prose",
                references: 0,
                lists: [
                    {
                        id: 9,
                        name: "Crime Fiction",
                        references: 0,
                        lists: []
                    }, {
                        id: 4,
                        name: "Gothic",
                        references: 2,
                        lists: []
                    }
                ]
            }]
        }, {
            id: 2,
            name: "Non-Fiction",
            references: 0,
            lists: [
                {
                    id: 3,
                    name: "Journalism",
                    references: 0,
                    lists: []
                }, {
                    id: 4,
                    name: "Academic",
                    references: 0,
                    lists: []
                }
            ]
        }
        ];

        return genres;
    }

    updateAuthor(iri: number, newAuthor: any) {
        const author = this.objAuthors[iri];
        author.firstName = newAuthor.firstName;
        author.lastName = newAuthor.lastName;
        author.internalID = newAuthor.internalID;
        author.description = newAuthor.description;
        author.birthDate = newAuthor.birthDate;
        author.deathDate = newAuthor.deathDate;
    }

    updateBook(iri: number, newBook: any) {
        console.log("backend", newBook);
        const book = this.objBooks[iri];
        book.internalID = newBook.internalID;
        book.title = newBook.title;
        book.order = newBook.order;
        // TODO Check if all id are valid
        book.authors = newBook.authors;
        book.venues = newBook.venues;
        book.organisations = newBook.organisations;
    }

    updateLanguage(iri: number, newLanguage: any) {
        const language = this.objLanguages[iri];
        language.name = newLanguage.name;
        language.order = newLanguage.order;
    }

    updateEdition(iri: number, newEdition: any) {
        const edition = this.objEditions[iri];
        edition.publicationInfo = newEdition.publicationInfo;
        edition.order = newEdition.order;
        // TODO Check if all IDs are valid
        edition.book = newEdition.book;
        edition.language = newEdition.language;
    }

    updateEditionOriginal(iri: number, newEditionOr: any) {
        const editionOr = this.objEditions[iri];
        editionOr.publicationInfo = newEditionOr.publicationInfo;
        editionOr.order = newEditionOr.order;
        // TODO Check if all IDs are valid
        editionOr.book = newEditionOr.book;
        editionOr.language = newEditionOr.language;
    }

    updateOrganisation(iri: number, newOrganisation: any) {
        const organisation = this.objOrganisation[iri];
        organisation.name = newOrganisation.name;
        organisation.order = newOrganisation.order;
    }

    updateSubject(iri: number, newSbject: any) {
        const subject = this.objSubjects[iri];
        subject.name = newSbject.name;
        subject.order = newSbject.order;
    }

    updateGenre(iri: number, genre: any) {
    }

    updatePassage(iri: number, newPassage: any) {
        const passage = this.objPassages[iri];
        passage.text = newPassage.text;
        passage.page = newPassage.page;
        passage.order = newPassage.order;
        // TODO Check if all IDs are valid
        passage.edition = newPassage.edition;
    }

    updatePassageOriginal(iri: number, newPassageOr: any) {
        const passageOr = this.objPassages[iri];
        passageOr.text = newPassageOr.text;
        passageOr.page = newPassageOr.page;
        passageOr.order = newPassageOr.order;
        // TODO Check if all IDs are valid
        passageOr.edition = newPassageOr.edition;
    }

    updateLexia(iri: number, newLexia: any) {
        const lexia = this.objLexia[iri];
        lexia.internalID = newLexia.internalID;
        lexia.lexia = newLexia.lexia;
        lexia.order = newLexia.order;
    }

    updateContributor(iri: number, newContributor: any) {
        const contributor = this.objContributors[iri];
        contributor.firstName = newContributor.firstName;
        contributor.lastName = newContributor.lastName;
        contributor.order = newContributor.order;
        contributor.email = newContributor.email;
    }

    updateVenue(iri: number, newVenue: any) {
        const venue = this.objVenues[iri];
        venue.name = newVenue.name;
        venue.city = newVenue.city;
        venue.order = newVenue.order;
    }

    createAuthor(data: any) {
        const newAuthor: Author = {
            id: 30,
            internalID: data.internalID,
            firstName: data.firstName,
            lastName: data.lastName,
            description: data.description,
            birthDate: data.birthDate,
            deathDate: data.deathDate,
            order: 0,
            references: 0
        };
        this.authorList.push(newAuthor);
        this.objAuthors[newAuthor.id] = newAuthor;
    }

    createBook(data: any) {
        // TODO if id of authors, venues and organisations are valid
        const newBook: Book = {
            id: this.getID(),
            internalID: data.internalID,
            title: data.title,
            authors: data.authors,
            venues: data.venues,
            organisations: data.organisations,
            order: 0,
            references: 0
        };
        this.bookList.push(newBook);
        this.objBooks[newBook.id] = newBook;
    }

    createLanguage(data: any) {
        const newLanguage: Language = {
            id: this.getID(),
            name: data.name,
            order: 0,
            references: 0
        };
        this.languageList.push(newLanguage);
        this.objLanguages[newLanguage.id] = newLanguage;
    }

    createContributor(data: any) {
        const newContributor: Contributor = {
            id: this.getID(),
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            order: 0,
            references: 0
        };
        this.contributorList.push(newContributor);
        this.objContributors[newContributor.id] = newContributor;
    }

    createEdition(data: any) {
        const newEdition: Edition = {
            id: this.getID(),
            book: data.book,
            language: data.language,
            publicationInfo: data.publicationInfo,
            order: 0,
            references: 0
        };
        this.editionList.push(newEdition);
        this.objEditions[newEdition.id] = newEdition;
    }

    createEditionOriginal(data: any) {
        const newEditionOr: EditionOriginal = {
            id: this.getID(),
            book: data.book,
            language: data.language,
            publicationInfo: data.publicationInfo,
            order: 0,
            references: 0
        };
        this.editionOriginalList.push(newEditionOr);
        this.objEditionOriginals[newEditionOr.id] = newEditionOr;
    }

    createPassage(data: any) {
        const newPassage: Passage = {
            id: this.getID(),
            edition: data.edition,
            text: data.text,
            page: data.page,
            order: 0,
            references: 0
        };
        this.passageList.push(newPassage);
        this.objPassages[newPassage.id] = newPassage;
    }

    createPassageOriginal(data: any) {
        const newPassageOr: PassageOriginal = {
            id: this.getID(),
            edition: data.edition,
            text: data.text,
            page: data.page,
            order: 0,
            references: 0
        };
        this.passageOriginalList.push(newPassageOr);
        this.objPassagesOriginal[newPassageOr.id] = newPassageOr;
    }

    createVenue(data: any) {
        const newVenue: Venue = {
            id: this.getID(),
            name: data.name,
            city: data.city,
            order: 0,
            references: 0
        };
        this.venueList.push(newVenue);
        this.objVenues[newVenue.id] = newVenue;
    }

    createOrganisation(data: any) {
        const newOrganisation: Organisation = {
            id: this.getID(),
            name: data.name,
            order: 0,
            references: 0
        };
        this.organisationList.push(newOrganisation);
        this.objOrganisation[newOrganisation.id] = newOrganisation;
    }

    createSubject(data: any) {
        const newSubject: Subject = {
            id: this.getID(),
            name: data.name,
            order: 0,
            references: 0
        };
        this.subjectList.push(newSubject);
        this.objSubjects[newSubject.id] = newSubject;

    }

    createLexia(data: any) {
        const newLexia: Lexia = {
            id: this.getID(),
            internalID: data.internalID,
            lexia: data.lexia,
            order: 0,
            references: 0
        };
        this.lexiaList.push(newLexia);
        this.objLexia[newLexia.id] = newLexia;
    }

    createGenre(data: any) {
    }

    getID(): number {
        return (Math.random() * 10000) + 1;
    }
}
