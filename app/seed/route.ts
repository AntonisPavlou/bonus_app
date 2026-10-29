import postgres from 'postgres';
import { NextResponse } from 'next/server';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

const programs = [
  {
    slug: 'youth-pass',
    title: 'Youth Pass',
    subtitle: 'Οικονομική Ενίσχυση Νέων',
    amount: '150 €',
    badge_text: '18 - 19 Ετών',
    image_url: '/Athens-Music-Scene-A-Vibrant-Tapestry-768x432.avif',
    description: 'Ενίσχυση για συναυλίες, θέατρα, σινεμά, βιβλιοπωλεία και ακτοπλοϊκά ταξίδια.',
    official_link: 'https://vouchers.gov.gr/youthpass',
  },
  {
    slug: 'tourism-for-all',
    title: 'Τουρισμός για Όλους',
    subtitle: 'Πρόγραμμα Διακοπών',
    amount: '200€ - 300€',
    badge_text: 'Διακοπές',
    image_url: '/GettyImages-510967662-5c4ddd8846e0fb00018dea73.avif',
    description: 'Κάλυψη δαπανών διαμονής σε καταλύματα σε ολόκληρη την ελληνική επικράτεια.',
    official_link: 'https://vouchers.gov.gr/tourism4all-2025',
  },
  {
    slug: 'social-tourism',
    title: 'Κοινωνικός Τουρισμός',
    subtitle: 'Πρόγραμμα ΔΥΠΑ',
    amount: 'Έως 12 Βράδια',
    badge_text: 'ΔΥΠΑ',
    image_url: '/aerial-view-of-the-mountains-and-meteora-monasteries-in-greece-free-video.avif',
    description: 'Επιδότηση διακοπών για εργαζόμενους και ανέργους με επιταγές διαμονής και ακτοπλοϊκών.',
    official_link: 'https://www.dypa.gov.gr',
  },
  {
    slug: 'xios',
    title: 'Χίος & Κύθηρα Pass',
    subtitle: 'Νησιωτική Στήριξη',
    amount: '150€ - 200€',
    badge_text: 'Νησιωτικό Pass',
    image_url: '/kythira-chania-explorer-castle-1536x1023.avif',
    description: 'Ειδική άυλη ψηφιακή κάρτα για τόνωση του τοπικού τουρισμού σε επιλεγμένα νησιά.',
    official_link: 'https://vouchers.gov.gr',
  },
  {
    slug: 'eu-pass',
    title: 'Ευρωπαϊκή Κάρτα Νέων',
    subtitle: 'EYCA Greece',
    amount: 'Εκπτώσεις έως 50%',
    badge_text: 'EYCA Greece',
    image_url: '/OIP.avif',
    description: 'Προνόμια και εκπτώσεις σε μετακινήσεις, εισιτήρια πολιτισμού και συνεργαζόμενα καταστήματα.',
    official_link: 'https://europeanyouthcard.gr',
  },
];

export async function GET() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS programs (
        id SERIAL PRIMARY KEY,
        slug VARCHAR(255) UNIQUE NOT NULL,
        title VARCHAR(255) NOT NULL,
        subtitle VARCHAR(255),
        amount VARCHAR(50),
        badge_text VARCHAR(100),
        image_url VARCHAR(255) NOT NULL,
        description TEXT,
        official_link VARCHAR(255)
      );
    `;

    for (const prog of programs) {
      await sql`
        INSERT INTO programs (slug, title, subtitle, amount, badge_text, image_url, description, official_link)
        VALUES (${prog.slug}, ${prog.title}, ${prog.subtitle}, ${prog.amount}, ${prog.badge_text}, ${prog.image_url}, ${prog.description}, ${prog.official_link})
        ON CONFLICT (slug) DO UPDATE SET
          title = EXCLUDED.title,
          subtitle = EXCLUDED.subtitle,
          amount = EXCLUDED.amount,
          badge_text = EXCLUDED.badge_text,
          image_url = EXCLUDED.image_url,
          description = EXCLUDED.description,
          official_link = EXCLUDED.official_link;
      `;
    }

    return NextResponse.json({ message: 'Η βάση αρχικοποιήθηκε επιτυχώς με τα 5 προγράμματα!' });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}