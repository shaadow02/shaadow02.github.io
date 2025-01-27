function getAuthToken() {
    return localStorage.getItem('authToken');
}

async function verifyToken(token) {
    if (!token) {
        console.error('Brak tokenu');
        return false;
    }

    try {
        const response = await fetch('https://130.162.246.248:3000/api/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
        });

        const data = await response.json();
        return data.success;
    } catch (error) {
        console.error('Błąd podczas weryfikacji tokenu:', error);
        return false;
    }
}

const token = getAuthToken();

if (token) {
    verifyToken(token).then(isValid => {
        if (isValid) {
            if (window.scriptAlreadyRunning) {
                alert('ERROR: Skrypt już jest uruchomiony!');
            } else {
                window.scriptAlreadyRunning = true;
            
                console.log("SKRYPT ZALADOWANY")
            
                const panel = document.createElement('div');
            
                panel.style.position = 'fixed';
                panel.style.top = '10px';
                panel.style.right = '10px';
                panel.style.zIndex = '9999';
                panel.style.display = 'flex';
                panel.style.flexDirection = 'column';
                panel.style.alignItems = 'center';
                panel.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                panel.style.padding = '15px';
                panel.style.borderRadius = '10px';
                panel.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
            
                const closeButton = document.createElement('button');
                closeButton.textContent = 'X';
                closeButton.style.position = 'absolute';
                closeButton.style.bottom = '0.01px';
                closeButton.style.left = '97.5%';
                closeButton.style.transform = 'translateX(-50%)';
                closeButton.style.padding = '5px 10px';
                closeButton.style.fontSize = '16px';
                closeButton.style.fontWeight = 'bold';
                closeButton.style.backgroundColor = 'transparent';
                closeButton.style.color = 'red';
                closeButton.style.border = 'none';
                closeButton.style.cursor = 'pointer';
                closeButton.style.transition = 'background-color 0.3s';
                closeButton.style.borderRadius = '50%';
            
                closeButton.addEventListener('click', () => {
                    panel.style.display = 'none';
                });
            
                panel.appendChild(closeButton);
            
                const showButton = document.createElement('button');
                showButton.textContent = 'Pokaż panel';
                showButton.style.position = 'fixed';
                showButton.style.top = '10px';
                showButton.style.right = '10px';
                showButton.style.zIndex = '9999';
                showButton.style.padding = '10px';
                showButton.style.fontSize = '16px';
                showButton.style.backgroundColor = 'green';
                showButton.style.color = 'white';
                showButton.style.border = 'none';
                showButton.style.cursor = 'pointer';
                showButton.style.transition = 'background-color 0.3s';
                showButton.style.borderRadius = '5px';
                showButton.style.display = 'none';
            
                showButton.addEventListener('click', () => {
                    panel.style.display = 'flex';
                    showButton.style.display = 'none';
                });
            
                document.body.appendChild(showButton);
            
                closeButton.addEventListener('click', () => {
                    panel.style.display = 'none';
                    showButton.style.display = 'block';
                });
            
                const tabs = document.createElement('div');
                tabs.style.display = 'flex';
                tabs.style.marginBottom = '10px';
            
                const welcomeTab = document.createElement('button');
                const memoryTab = document.createElement('button');
                const birmoTab = document.createElement('button');
                const collectTab = document.createElement('button');
                welcomeTab.textContent = 'Witaj';
                memoryTab.textContent = 'Pamięć';
                birmoTab.textContent = 'Kliknij Birmo';
                collectTab.textContent = 'Przelatujacy ptak';
            
                [welcomeTab, memoryTab, birmoTab, collectTab].forEach(tab => {
                    tab.style.padding = '10px 20px';
                    tab.style.margin = '0 5px';
                    tab.style.fontSize = '14px';
                    tab.style.borderRadius = '5px';
                    tab.style.cursor = 'pointer';
                    tab.style.border = 'none';
                    tab.style.transition = 'background-color 0.3s';
                    tab.style.fontWeight = 'bold';
                    tab.style.outline = 'none';
                    tab.style.textTransform = 'uppercase';
                    tab.style.backgroundColor = 'transparent';
                    tab.style.color = '#fff';
                    tabs.appendChild(tab);
                });
            
                const categoryContainer = document.createElement('div');
                categoryContainer.style.width = '100%';
                categoryContainer.style.padding = '10px';
                categoryContainer.style.borderRadius = '5px';
            
                const welcomeCategory = document.createElement('div');
                welcomeCategory.style.display = 'block';
                welcomeCategory.style.backgroundColor = '#4CAF50';
                welcomeCategory.style.color = '#fff';
                welcomeCategory.style.padding = '10px';
                welcomeCategory.innerHTML = `
                <h3>MOMO DESTROYER 3000</h3>
                <p>Witaj użytkowniku!</p>
                <p>Jest to skrypt stworzony przez shdw</p>
            `;
            
                const memoryCategory = document.createElement('div');
                memoryCategory.style.display = 'none';
                memoryCategory.style.backgroundColor = '#2196F3';
                memoryCategory.style.color = '#fff';
                memoryCategory.style.padding = '10px';
                memoryCategory.innerHTML = `
                <h3>GRY ANIMO: PAMIEC</h3>
                <p>Automatyczne wygrywanie gry<br>jesli chcesz zakonczyc gre aby dostac XP kliknij aby przegrywac!</p>
            `;
            
                const birmoCategory = document.createElement('div');
                birmoCategory.style.display = 'none';
                birmoCategory.style.backgroundColor = '#D3C0DE';
                birmoCategory.style.color = '#fff';
                birmoCategory.style.padding = '10px';
                birmoCategory.innerHTML = `
                <h3>GRY ANIMO: KLIKNIJ BIRMO</h3>
                <p>Automatyczne wygrywanie gry<br>jesli chcesz zakonczyc gre aby dostac XP kliknij aby przegrywac!</p>
            `;
            
                const collectCategory = document.createElement('div');
                collectCategory.style.display = 'none';
                collectCategory.style.backgroundColor = '#E3821A';
                collectCategory.style.color = '#fff';
                collectCategory.style.padding = '10px';
                collectCategory.innerHTML = `
                <h3>Przelatujący Ptak</h3>
                <p>Włącz aby automatycznie odbierać diamenty<br>z przelatującego ptaka co jakiś czas</p>
            `;
            
                const toggleWinButton3 = document.createElement('button');
                const toggleLoseButton3 = document.createElement('button')
            
                toggleWinButton3.textContent = 'Odbieraj: OFF';
                toggleLoseButton3.textContent = 'Stop: OFF';
            
                [toggleWinButton3, toggleLoseButton3].forEach(button => {
                    button.style.padding = '10px 20px';
                    button.style.margin = '10px 20px';
                    button.style.borderRadius = '5px';
                    button.style.fontSize = '14px';
                    button.style.cursor = 'pointer';
                    button.style.border = 'none';
                    button.style.transition = 'background-color 0.3s, transform 0.2s';
                    button.style.fontWeight = 'bold';
                    button.style.outline = 'none';
                    button.style.textTransform = 'uppercase';
                    button.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
                    button.style.transition = 'all 0.3s';
                    button.style.backgroundColor = 'red';
                });
            
                const toggleWinButton2 = document.createElement('button');
                const toggleLoseButton2 = document.createElement('button');
            
                toggleWinButton2.textContent = 'Wygrywaj: OFF';
                toggleLoseButton2.textContent = 'Przegrywaj: OFF';
            
                [toggleWinButton2, toggleLoseButton2].forEach(button => {
                    button.style.padding = '10px 20px';
                    button.style.margin = '10px 20px';
                    button.style.borderRadius = '5px';
                    button.style.fontSize = '14px';
                    button.style.cursor = 'pointer';
                    button.style.border = 'none';
                    button.style.transition = 'background-color 0.3s, transform 0.2s';
                    button.style.fontWeight = 'bold';
                    button.style.outline = 'none';
                    button.style.textTransform = 'uppercase';
                    button.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
                    button.style.transition = 'all 0.3s';
                    button.style.backgroundColor = 'red';
                });
            
                const toggleWinButton = document.createElement('button');
                const toggleLoseButton = document.createElement('button');
            
                toggleWinButton.textContent = 'Wygrywaj: OFF';
                toggleLoseButton.textContent = 'Przegrywaj: OFF';
            
                [toggleWinButton, toggleLoseButton].forEach(button => {
                    button.style.padding = '10px 20px';
                    button.style.margin = '10px 20px';
                    button.style.borderRadius = '5px';
                    button.style.fontSize = '14px';
                    button.style.cursor = 'pointer';
                    button.style.border = 'none';
                    button.style.transition = 'background-color 0.3s, transform 0.2s';
                    button.style.fontWeight = 'bold';
                    button.style.outline = 'none';
                    button.style.textTransform = 'uppercase';
                    button.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
                    button.style.transition = 'all 0.3s';
                    button.style.backgroundColor = 'red';
                });
            
                function switchTab(activeTab) {
                    if (activeTab === 'welcome') {
                        welcomeCategory.style.display = 'block';
                        memoryCategory.style.display = 'none';
                        collectCategory.style.display = 'none';
                        birmoCategory.style.display = 'none';
                    } else if (activeTab === 'memory') {
                        welcomeCategory.style.display = 'none';
                        birmoCategory.style.display = 'none';
                        collectCategory.style.display = 'none';
                        memoryCategory.style.display = 'block';
                        memoryCategory.appendChild(toggleWinButton);
                        memoryCategory.appendChild(toggleLoseButton);
                    } else if (activeTab === 'birmo') {
                        welcomeCategory.style.display = 'none';
                        memoryCategory.style.display = 'none';
                        collectCategory.style.display = 'none';
                        birmoCategory.style.display = 'block';
                        birmoCategory.appendChild(toggleWinButton2);
                        birmoCategory.appendChild(toggleLoseButton2);
                    } else if (activeTab === 'collect') {
                        welcomeCategory.style.display = 'none';
                        memoryCategory.style.display = 'none';
                        birmoCategory.style.display = 'none';
                        collectCategory.style.display = 'block';
                        collectCategory.appendChild(toggleWinButton3);
                        collectCategory.appendChild(toggleLoseButton3);
                    }
                }
            
                panel.appendChild(tabs);
                panel.appendChild(categoryContainer);
            
                categoryContainer.appendChild(welcomeCategory);
                categoryContainer.appendChild(memoryCategory);
                categoryContainer.appendChild(birmoCategory);
                categoryContainer.appendChild(collectCategory);
            
                switchTab('welcome');
            
                welcomeTab.addEventListener('click', () => {
                    switchTab('welcome');
                });
            
                memoryTab.addEventListener('click', () => {
                    switchTab('memory');
                });
            
                birmoTab.addEventListener('click', () => {
                    switchTab('birmo');
                });
            
                collectTab.addEventListener('click', () => {
                    switchTab('collect');
                });
            
                document.body.appendChild(panel);
            
                let winIntervalId;
                let loseIntervalId;
            
                let winIntervalId2;
                let loseIntervalId2;
            
                let winIntervalId3;
                let loseIntervalId3;
            
                let observer;
            
                function toggleWin3() {
                    if (winIntervalId3) {
                        clearInterval(winIntervalId3);
                        winIntervalId3 = null;
                        toggleWinButton3.textContent = 'Odbieraj: OFF';
                        toggleWinButton3.style.backgroundColor = 'red';
            
                        if (observer) {
                            observer.disconnect();
                        }
                    } else {
                        if (loseIntervalId3) {
                            clearInterval(loseIntervalId3);
                            loseIntervalId3 = null;
                            toggleLoseButton3.textContent = 'Stop: OFF';
                            toggleLoseButton3.style.backgroundColor = 'red';
                        }
            
                        winIntervalId3 = setInterval(() => {
                            setTimeout(function() {
                                observer = new WebKitMutationObserver(function(mutations) {
                                    mutations.forEach(function(mutation) {
                                        if (document.getElementsByClassName('anivent_diamond anim_on')) {
                                            try {
                                                document.getElementsByClassName('anivent_bird')[0].click();
                                            } catch (err) {}
                                        }
                                    });
                                });
                                var config = {
                                    attributes: true,
                                    childList: true,
                                    characterData: true,
                                    subtree: true
                                };
            
                                observer.observe(document.querySelector("#aniventContainer"), config);
                                observer.observe(document.querySelector("#frame"), config);
                            })
                        }, 100);
                        toggleWinButton3.textContent = 'Odbieraj: ON';
                        toggleWinButton3.style.backgroundColor = 'green';
                    }
                }
            
                function toggleLose3() {
                    if (loseIntervalId3) {
                        clearInterval(loseIntervalId3);
                        loseIntervalId3 = null;
                        toggleLoseButton3.textContent = 'Stop: OFF';
                        toggleLoseButton3.style.backgroundColor = 'red';
            
                        if (observer) {
                            observer.disconnect();
                        }
                    } else {
                        if (winIntervalId3) {
                            clearInterval(winIntervalId3);
                            winIntervalId3 = null;
                            toggleWinButton3.textContent = 'Odbieraj: OFF';
                            toggleWinButton3.style.backgroundColor = 'red';
                        }
            
                        loseIntervalId3 = setInterval(() => {
                            if (observer) {
                                observer.disconnect();
                            }
                        }, 100);
                        toggleLoseButton3.textContent = 'Stop: ON';
                        toggleLoseButton3.style.backgroundColor = 'green';
                    }
                }
            
                function toggleWin2() {
                    if (winIntervalId2) {
                        clearInterval(winIntervalId2);
                        winIntervalId2 = null;
                        toggleWinButton2.textContent = 'Wygrywaj: OFF';
                        toggleWinButton2.style.backgroundColor = 'red';
                    } else {
                        if (loseIntervalId2) {
                            clearInterval(loseIntervalId2);
                            loseIntervalId2 = null;
                            toggleLoseButton2.textContent = 'Przegrywaj: OFF';
                            toggleLoseButton2.style.backgroundColor = 'red';
                        }
                        winIntervalId2 = setInterval(() => {
                            const elements = document.querySelectorAll('.bubbleIn-game');
            
                            elements.forEach(element => {
                                if (!element.classList.contains('mole3')) {
                                    element.click();
                                }
                            });
                        }, 100);
                        toggleWinButton2.textContent = 'Wygrywaj: ON';
                        toggleWinButton2.style.backgroundColor = 'green';
                    }
                }
            
                function toggleLose2() {
                    if (loseIntervalId2) {
                        clearInterval(loseIntervalId2);
                        loseIntervalId2 = null;
                        toggleLoseButton2.textContent = 'Przegrywaj: OFF';
                        toggleLoseButton2.style.backgroundColor = 'red';
                    } else {
                        if (winIntervalId2) {
                            clearInterval(winIntervalId2);
                            winIntervalId2 = null;
                            toggleWinButton2.textContent = 'Wygrywaj: OFF';
                            toggleWinButton2.style.backgroundColor = 'red';
                        }
                        loseIntervalId2 = setInterval(() => {
                            const elements = document.querySelectorAll('.bubbleIn-game');
            
                            elements.forEach(element => {
                                if (element.classList.contains('mole3')) {
                                    element.click();
                                }
                            });
                        }, 100);
                        toggleLoseButton2.textContent = 'Przegrywaj: ON';
                        toggleLoseButton2.style.backgroundColor = 'green';
                    }
                }
            
                function toggleWin() {
                    if (winIntervalId) {
                        clearInterval(winIntervalId);
                        winIntervalId = null;
                        toggleWinButton.textContent = 'Wygrywaj: OFF';
                        toggleWinButton.style.backgroundColor = 'red';
                    } else {
                        if (loseIntervalId) {
                            clearInterval(loseIntervalId);
                            loseIntervalId = null;
                            toggleLoseButton.textContent = 'Przegrywaj: OFF';
                            toggleLoseButton.style.backgroundColor = 'red';
                        }
                        winIntervalId = setInterval(() => {
                            const animals = document.querySelectorAll('.game1-sprite.trans_on');
                            const animalMap = new Map();
            
                            animals.forEach(animal => {
                                const backgroundImage = animal.style.backgroundImage;
                                if (backgroundImage) {
                                    if (animalMap.has(backgroundImage)) {
                                        animalMap.get(backgroundImage).click();
                                        animal.click();
                                    } else {
                                        animalMap.set(backgroundImage, animal);
                                    }
                                }
                            });
                            const intermissionSection = document.querySelector('.pet-game-intermission[style*="display: block"]');
                            if (intermissionSection) {
                                const nextRoundButton = intermissionSection.querySelector('.pet-game-intermission-button');
                                if (nextRoundButton) {
                                    nextRoundButton.click();
                                }
                            }
                        }, 100);
                        toggleWinButton.textContent = 'Wygrywaj: ON';
                        toggleWinButton.style.backgroundColor = 'green';
                    }
                }
            
                function toggleLose() {
                    if (loseIntervalId) {
                        clearInterval(loseIntervalId);
                        loseIntervalId = null;
                        toggleLoseButton.textContent = 'Przegrywaj: OFF';
                        toggleLoseButton.style.backgroundColor = 'red';
                    } else {
                        if (winIntervalId) {
                            clearInterval(winIntervalId);
                            winIntervalId = null;
                            toggleWinButton.textContent = 'Wygrywaj: OFF';
                            toggleWinButton.style.backgroundColor = 'red';
                        }
                        loseIntervalId = setInterval(() => {
                            const intermissionSection = document.querySelector('.pet-game-intermission[style*="display: block"]');
                            if (intermissionSection) {
                                const nextRoundButton = intermissionSection.querySelector('.pet-game-intermission-button');
                                if (nextRoundButton) {
                                    nextRoundButton.click();
                                }
                            }
                            const bombs = document.querySelectorAll('.game1-sprite.trans_on.bomb');
                            bombs.forEach(bomb => {
                                bomb.click();
                            });
                        }, 100);
                        toggleLoseButton.textContent = 'Przegrywaj: ON';
                        toggleLoseButton.style.backgroundColor = 'green';
                    }
                }
            
                toggleWinButton2.addEventListener('click', toggleWin2);
                toggleLoseButton2.addEventListener('click', toggleLose2);
            
                toggleWinButton.addEventListener('click', toggleWin);
                toggleLoseButton.addEventListener('click', toggleLose);
            
                toggleWinButton3.addEventListener('click', toggleWin3);
                toggleLoseButton3.addEventListener('click', toggleLose3);
            
                function keepPageActive() {
                    setInterval(() => {
                        window.dispatchEvent(new Event('focus'));
                        document.dispatchEvent(new MouseEvent('mousemove', {
                            bubbles: true,
                            cancelable: true,
                            clientX: Math.random() * window.innerWidth,
                            clientY: Math.random() * window.innerHeight,
                        }));
                    }, 5000);
                }
            
                keepPageActive();
            }
        } else {
            console.error('Token jest nieważny lub niepoprawny');
        }
    });
} else {
    console.error('Brak tokenu w localStorage');
}
