const express = require("express");
const router = express.Router();

let voitures = [
    { id: 1, name: "clio" },
    { id: 2, name: "megane" },
    { id: 3, name: "range" }
];

router.post("/", (req, res) => {
    const voiture = req.body;
    voitures.push(voiture);
    res.json(voitures);
});

router.get("/", (req, res) => {
    res.json(voitures);
});

router.get("/:id", (req, res) => {
    const voitureId = parseInt(req.params.id);
    const voiture = voitures.find(v => v.id === voitureId);
    if (voiture) {
        res.json(voiture);
    } else {
        res.status(404).json({ message: "Voiture non trouvée" });
    }
});

router.put("/:id", (req, res) => {
    const voitureId = parseInt(req.params.id);
    const updatedVoiture = req.body;

    let index = voitures.findIndex(voiture => voiture.id === voitureId);
    if (index !== -1) {
        voitures[index] = updatedVoiture;
        res.json({ message: "Voiture mise à jour avec succès" });
    } else {
        res.status(404).json({ message: "Voiture non trouvée" });
    }
});

router.delete("/:id", (req, res) => {
    const voitureId = parseInt(req.params.id);

    let index = voitures.findIndex(voiture => voiture.id === voitureId);
    if (index !== -1) {
        voitures.splice(index, 1);
        res.json({ message: "Voiture supprimée avec succès" });
    } else {
        res.status(404).json({ message: "Voiture non trouvée" });
    }
});

module.exports = router;
