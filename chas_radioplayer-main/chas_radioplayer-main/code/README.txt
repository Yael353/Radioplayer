For FWM - OWASP

1. What is OWASP and what is its primary mission as described in the article?

OWASP står för Open Web Application Security Project och är en internationell ideell organisation dedikerad till säkerhet för webbapplikationer. Dess primära uppdrag är att tillhandahålla fritt tillgängliga material och verktyg för att förbättra säkerheten för webbapplikationer.

2. Explain the concept of "Injection". Provide an example of how an injection attack could compromise a web application's security.

"Injection" är en typ av attack där skadlig kod injiceras i en webbapplikations inputdata för att utföra oönskade operationer. Ett exempel är en SQL-injectionsattack där en angripare injicerar SQL-kod i ett inmatningsfält som förväntas innehålla användarnamn. Om fältet inte är ordentligt skyddat kan detta resultera i att SQL-koden exekveras och ger angriparen obehörig åtkomst till databasen.

3. Explain two strategies to prevent Broken Authentication vulnerabilities.

Två strategier för att förhindra sårbarheter i Broken Authentication är att använda tvåfaktorsautentisering (2FA) och att begränsa eller fördröja upprepade inloggningsförsök genom att använda rate limiting.

4. Describe the potential consequences of Insecure Deserialization in web applications. How can developers protect against such attacks?

Potentiella konsekvenser av Insecure Deserialization inkluderar DDoS-attacker och fjärrkodexekveringsattacker. Utvecklare kan skydda sig genom att övervaka deserialization och implementera typkontroller, samt genom att förbjuda deserialization av data från oönskade källor.

5. Briefly define Cross-Site Scripting (XSS) as outlined in the article and list two methods suggested in the article to prevent XSS attacks in web applications.

Cross-Site Scripting (XSS) är en typ av attack där angriparen injicerar skadlig kod i en webbapplikations frontend. Två metoder för att förhindra XSS-attacker är att undvika att infoga omodifierade användarinput i webbsidor och att använda ramverk som automatiskt hanterar kodsanering, såsom ReactJS och Ruby on Rails.



For UXF - WCAG

1. Explain the importance of semantic elements in web development according to accessibility guidelines. Provide examples of at least two semantic HTML elements and clarify how they enhance accessibility for users with disabilities.
Semantiska element i webbutveckling är avgörande för tillgänglighetsriktlinjer eftersom de ger en meningsfull struktur till webbsidor. Till exempel kan <header> användas för att markera sidhuvudet och <nav> för att markera navigationslänkar. Genom att använda dessa element blir sidan mer lättläst för användare med funktionshinder, såsom skärmläsare, eftersom de ger en klar struktur till sidan.

2. Describe the significance of color contrast in web design concerning accessibility. How does adhering to color contrast guidelines benefit users with visual impairments, and what are the recommended contrast ratios as per WCAG standards?
Färgkontrast är viktigt för tillgänglighet i webbdesign eftersom det säkerställer att texten är läsbar för användare med synnedsättningar. Genom att följa färgkontrastriktlinjer enligt WCAG-standarder, såsom ett kontrastförhållande på minst 4.5:1 för normal text och 3:1 för större text, kan användare med synnedsättningar läsa texten tydligt och utan svårigheter.

3. Discuss the role of alternative text (alt text) for images in accordance with accessibility guidelines. Why is it crucial to include descriptive alt text, and how does this contribute to making web content more accessible? Provide examples to illustrate your explanation.
Alternativ text (alt text) för bilder är avgörande för tillgänglighet eftersom det tillåter användare med synnedsättningar att förstå innehållet i bilderna. Genom att inkludera beskrivande alt text kan skärmläsare läsa upp beskrivningen för användaren. Till exempel, för en bild av en hund kan alternativ text vara "En glad brun labrador som leker på stranden".

4. Explain the purpose of landmarks in creating accessible web content. How do landmarks aid in navigation for users of assistive technologies, and can you provide examples of commonly used landmark elements in HTML?
Landmärken är viktiga för att skapa tillgängligt webbinnehåll eftersom de ger markörer för olika delar av sidan. För användare av hjälpmedel som skärmläsare underlättar landmärken navigationen genom att ge en tydlig struktur till sidan. Exempel på vanligt använda landmärkenselement i HTML inkluderar <main>, <aside>, och <footer>.

5. Describe the significance of proper form labeling. Why is it important to label form elements, and what strategies can developers implement to ensure effective labeling for improved accessibility?
Det är viktigt att labela formulärelement för att underlätta för användare, särskilt för dem som använder skärmläsare. Korrekt labelling av formulärelement gör det tydligt för användaren vilken typ av information som förväntas i varje fält. En strategi för att säkerställa effektiv labelling är att använda HTML-elementet <label> som är associerat med respektive formulärelement. Till exempel:

                    <label for="username">Användarnamn:</label>
                    <input type="text" id="username" name="username">

Detta gör det tydligt för användaren att det förväntade inmatningsfältet är för användarnamn.
