const asyncHandler = require('express-async-handler')

//@desc Get goals
//@route GET /api/goals
//@access Private
const getGoals = asyncHandler(async (req,res) => {
    res.status(200).json({message: 'Get Goals' })
})

//@desc Set goals
//@route POST /api/goals/
//@access Private
const setGoals = asyncHandler(async (req,res) => {
    if(!req.body.text){
        
        throw new Error('ajouter un champs texte')

    }
    res.status(200).json({message: 'Set Goals' })
})

//@desc Update goals
//@route PUT /api/goals/:id
//@access Private
const updateGoals = asyncHandler(async (req,res) => {
    res.status(200).json({message: `update goals ${req.params.id}` });
})

//@desc delete goals
//@route DELETE /api/goals/:id
//@access Private
const deleteGoals = asyncHandler(async (req,res) => {
    res.status(200).json({message: `Delete goals ${req.params.id}` });
})



module.exports =  {
    getGoals,setGoals,updateGoals,deleteGoals
}