console.log("Novalius Module Loaded");

Hooks.on("ready", () => {

    CONFIG.DND5E.spellSchools.growth = "Growth";
    CONFIG.DND5E.spellSchools.malice = "Malice";
    CONFIG.DND5E.spellSchools.test1 = "Test";
    console.log(CONFIG.DND5E.spellSchools.growth, 'added to spell schools.');
});

console.log(CONFIG.DND5E.spellSchools.growth, 'added to spell schools.');