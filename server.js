const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();


const PORT = process.env.PORT || 3001;