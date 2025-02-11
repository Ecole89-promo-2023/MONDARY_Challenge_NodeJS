const bcrypt = require('bcryptjs');
const User = require('../models/User');

const register = async (req, res) => {
    try {
        const { firstName, lastName, address, zip, city, phone, email, password } = req.body;

        // Check if email already exists
        const existingUser = await User.findOne({ where: { email: email } });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Validate password
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!passwordRegex.test(password)) {
            return res.status(400).json({
                message: 'Password must contain at least 8 characters, including one lowercase letter, one uppercase letter, and one number'
            });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new User({
            firstName,
            lastName,
            address,
            zip,
            city,
            phone,
            email,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = { register };