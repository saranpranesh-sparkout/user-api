import User from "../models/userModel.js";
export const createUser = async (req,res) => {
 try {
    const{name, age, email, isAdmin} = req.body
     const newUser = await User.create({ name, email, age, isAdmin });
 res.status(201).json(newUser)
 } catch (error) {
    res.status(400).json({message:error.message})
    }   
}

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); 
 User.find() 
  res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

    export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id); 

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' }); 
    }

  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
};

export const updateUser = async (req, res) => {
  try {
    const { name, email, age, isAdmin } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, age, isAdmin },
      { new: true } 
    );
    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id)
        if (deletedUser) {
      res.json({ message: 'User deleted successfully' });
} else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


