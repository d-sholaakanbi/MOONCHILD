const bcrypt = require('bcrypt');

const testHashAndCompare = async () => {
    const plainPassword = 'show11122456789';
    
    // Hash the password for testing purposes
    const saltRounds = 12;
    const salt = await bcrypt.genSalt(saltRounds);
    const newHashedPassword = await bcrypt.hash(plainPassword, salt);
    console.log('New Hashed Password:', newHashedPassword);

    // Compare the provided plain password with the newly hashed password
    const matchNew = await bcrypt.compare(plainPassword, newHashedPassword);
    console.log('Password match with new hash:', matchNew);

    // Compare the provided plain password with the stored hashed password
    const storedHashedPassword = '$2b$12$VcCZudhdncNqGrwAYJhWXu64IuXUn83YlXbXLLVCQfJkFR4j/A0CG';
    const matchStored = await bcrypt.compare(plainPassword, storedHashedPassword);
    console.log('Password match with stored hash:', matchStored);
};

testHashAndCompare().catch(err => console.error('Error:', err));
