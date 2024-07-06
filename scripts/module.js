console.log("Novalius Module Loaded");

Hooks.on("ready", () => {

    CONFIG.DND5E.spellSchools.growth = {
        label: "Growth",
        icon: "…",
        fullKey: "growth", // Full key used in enrichers
        reference: "" // UUID of journal entry page for rich tooltips
      };
});