console.log("Novalius Module Loaded");

Hooks.on("setup", () => {

    CONFIG.DND5E.spellSchools.growth = "Growth";
    console.log(CONFIG.DND5E.spellSchools.growth, 'added to spell schools.');
});

console.log(CONFIG.DND5E.spellSchools.growth, 'added to spell schools.');