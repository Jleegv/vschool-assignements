const express = require("express");
const airRoutes = express.Router();
const Air = require("../models/air");

airRoutes.get("/", (req,res) => {
  Air.find((err, qualities) => {
      if(err

airRoutes.post("/", (req,res) => {
  Air.find((err, qualities) => {
      if(err

airRoutes.get("/", (req,res) => {
  Air.find((err, qualities) => {
      if(err

airRoutes.put("/", (req,res) => {
  Air.find((err, qualities) => {
      if(err

airRoutes.delete("/", (req,res) => {
  Air.find((err, qualities) => {
      if(err
