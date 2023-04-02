const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Successful - GET",
        metadata: {
            hostname: req.hostname,
            method: req.method
        }
    });
});

router.get("/:id", (req, res, next) => {
    res.status(200).json({
        message: "Successful - GET by ID",
        metadata: {
            hostname: req.hostname,
            method: req.method,
            id: req.params.id
        }
    });
});

router.post("/", (req, res, next) => {
    res.status(201).json({
        message: "Successful - POST",
        metadata: {
            name: req.body.name,
            hostname: req.hostname,
            method: req.method
        }
    });
});

router.put("/:id", (req, res, next) => {
    res.status(200).json({
        message: "Successful - PUT by ID",
        metadata: {
            hostname: req.hostname,
            method: req.method,
            id: req.params.id
        }
    });
});

router.delete("/:id", (req, res, next) => {
    res.status(200).json({
        message: "Successful - DELETE by ID",
        metadata: {
            hostname: req.hostname,
            method: req.method,
            id: req.params.id
        }
    });
});

module.exports = router;