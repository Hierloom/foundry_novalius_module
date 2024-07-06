console.log("Novalius Module Loaded");
const schools = [
    {
        aspectType: "Worldly",
        aspect: "Flame"
    },
    {
        aspectType: "Worldly",
        aspect: "Blood Flame"
    },
    {
        aspectType: "Worldly",
        aspect: "Fury"
    },
    {
        aspectType: "Worldly",
        aspect: "Lava"
    },
    {
        aspectType: "Worldly",
        aspect: "Demonic Flame"
    },
    {
        aspectType: "Worldly",
        aspect: "Lightning"
    },
    {
        aspectType: "Worldly",
        aspect: "White Lightning"
    },
    {
        aspectType: "Worldly",
        aspect: "Water"
    },
    {
        aspectType: "Worldly",
        aspect: "Ice"
    },
    {
        aspectType: "Worldly",
        aspect: "Wind"
    },
    {
        aspectType: "Worldly",
        aspect: "Spectral Wind"
    },
    {
        aspectType: "Worldly",
        aspect: "Metal"
    },
    {
        aspectType: "Worldly",
        aspect: "Illusion"
    },
    {
        aspectType: "Unworldly",
        aspect: "Perception"
    },
    {
        aspectType: "Worldly",
        aspect: "Belief"
    },
    {
        aspectType: "Unworldly",
        aspect: "Fundamentality"
    },
    {
        aspectType: "Worldly",
        aspect: "Oracle"
    },
    {
        aspectType: "Worldly",
        aspect: "Shadow"
    },
    {
        aspectType: "Worldly",
        aspect: "Dark"
    },
    {
        aspectType: "Worldly",
        aspect: "Oblivion"
    },
    {
        aspectType: "Unworldly",
        aspect: "Malice"
    },
    {
        aspectType: "Worldly",
        aspect: "Mirage"
    },
    {
        aspectType: "Worldly",
        aspect: "Light"
    },
    {
        aspectType: "Worldly",
        aspect: "Blood"
    },
    {
        aspectType: "Worldly",
        aspect: "Haste"
    },
    {
        aspectType: "Unworldly",
        aspect: "Conjunction"
    },
    {
        aspectType: "Unworldly",
        aspect: "Puppet"
    },
    {
        aspectType: "Worldly",
        aspect: "Regeneration"
    },
    {
        aspectType: "Worldly",
        aspect: "Crystal"
    },
    {
        aspectType: "Worldly",
        aspect: "Beast"
    },
    {
        aspectType: "Worldly",
        aspect: "Infection"
    },
    {
        aspectType: "Worldly",
        aspect: "Speaker"
    },
    {
        aspectType: "Unworldly",
        aspect: "Life"
    },
    {
        aspectType: "Unworldly",
        aspect: "Animation"
    },
    {
        aspectType: "Unworldly",
        aspect: "Spirit"
    },
    {
        aspectType: "Worldly",
        aspect: "Restoration"
    },
    {
        aspectType: "Worldly",
        aspect: "Growth"
    },
    {
        aspectType: "Unworldly",
        aspect: "Death"
    },
    {
        aspectType: "Unworldly",
        aspect: "Branding"
    },
    {
        aspectType: "Unworldly",
        aspect: "Judgement"
    },
    {
        aspectType: "Unworldly",
        aspect: "Curse"
    },
    {
        aspectType: "Unworldly",
        aspect: "Binding"
    },
    {
        aspectType: "Worldly",
        aspect: "Marking"
    },
    {
        aspectType: "Unworldly",
        aspect: "Scourge"
    },
    {
        aspectType: "Unworldly",
        aspect: "Voodoo"
    },
    {
        aspectType: "Worldly",
        aspect: "Boon"
    },
    {
        aspectType: "Unworldly",
        aspect: "Lament"
    },
    {
        aspectType: "Unworldly",
        aspect: "Sentience"
    },
    {
        aspectType: "Unworldly",
        aspect: "Mending"
    },
    {
        aspectType: "Unworldly",
        aspect: "Fear"
    },
    {
        aspectType: "Unworldly",
        aspect: "Angelic"
    },
    {
        aspectType: "Unworldly",
        aspect: "Demonic"
    },
    {
        aspectType: "Unworldly",
        aspect: "Imbuement"
    },
    {
        aspectType: "Unworldly",
        aspect: "Command"
    },
    {
        aspectType: "Unworldly",
        aspect: "Tether"
    },
    {
        aspectType: "Unworldly",
        aspect: "Warp"
    },
    {
        aspectType: "Unworldly",
        aspect: "Weaver"
    },
    {
        aspectType: "Unworldly",
        aspect: "Balance"
    },
    {
        aspectType: "Unworldly",
        aspect: "Equivalence"
    },
    {
        aspectType: "Worldly",
        aspect: "Exchange"
    },
    {
        aspectType: "Unworldly",
        aspect: "Scales"
    },
    {
        aspectType: "Unworldly",
        aspect: "Fate"
    },
    {
        aspectType: "Unworldly",
        aspect: "Repletion"
    },
    {
        aspectType: "Unworldly",
        aspect: "Absolution"
    },
    {
        aspectType: "Unworldly",
        aspect: "Condemnation"
    }
    
];
Hooks.on("ready", () => {
    const sortedSchools = schools.sort((a, b) => a.aspect.localeCompare(b.aspect));
    for(let i = 0; i < sortedSchools.length; i++) {
        CONFIG.DND5E.spellSchools[sortedSchools[i].aspect.toLowerCase()] = {
            label: sortedSchools[i].aspectType + " Aspect: " + sortedSchools[i].aspect,
            icon: "…",
            fullKey: sortedSchools[i].aspect.toLowerCase(),
            reference: ""
        };
    }
});