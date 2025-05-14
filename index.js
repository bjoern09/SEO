
import { Card, CardContent } from "react-bootstrap";
import { Button, InputGroup, FormControl } from "react-bootstrap";

export default function DemoWebsite() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Textlokal – SEO-Texte für lokale Dienstleister</h1>
        <p className="text-lg text-muted-foreground">
          Mehr Sichtbarkeit bei Google für Unternehmen aus Herne, Bochum und Umgebung.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Leistungen</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-2">Start</h3>
              <p>1 Standortseite (z. B. „Friseur Herne“) <br /> ab 99 €</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-2">Standard</h3>
              <p>1 Standortseite + 2 Leistungsseiten <br /> ab 249 €</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-2">Premium</h3>
              <p>4 Texte + Keywordrecherche + Snippets <br /> ab 449 €</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Über mich</h2>
        <p>
          Ich bin Texter aus Herne und helfe lokalen Unternehmen im Ruhrgebiet, bei Google besser gefunden zu
          werden – mit professionellen, suchmaschinenoptimierten Texten. Durch den Einsatz von KI-Tools wie
          ChatGPT biete ich Ihnen effiziente und kostengünstige Lösungen.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Kontakt</h2>
        <p>Sie möchten ein kostenloses Gespräch vereinbaren?</p>
        <form className="flex flex-col md:flex-row gap-2">
          <InputGroup>
            <FormControl placeholder="Ihre E-Mail-Adresse" type="email" required />
          </InputGroup>
          <Button type="submit">Anfrage senden</Button>
        </form>
        <p className="text-sm text-muted-foreground">Oder schreiben Sie direkt an: kontakt@textlokal.de</p>
      </section>
    </div>
  );
}
