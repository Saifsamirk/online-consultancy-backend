const express = require("express");
const { check, validationResult } = require("express-validator/check");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const reservation = require("../model/reservation");
const router = express.Router();
const Reservation = require("../model/reservation");

router.post(
    "/reserve",
    [
      check("email", "Please enter a valid email").isEmail(),
      check("date", "Date is required").not().isEmpty(),
      check("phone", "Phone is required").not().isEmpty(),
    ],
    async (req, res) => {
      const errors = validationResult(req);
      // Object destructruing 
      const { email, phone, date} = req.body;
      try {
        if (!errors.isEmpty()) {
            return res.status(400).json({
              errors: errors.array(),
            });
        }
        reservation = new Reservation({
            email,
            phone,
            date,
          });
      await reservation.save();

      } 
      catch (e) {
        console.error(e);
        res.status(500).json({
          message: "Server Error",
        });
      }
    }
  );