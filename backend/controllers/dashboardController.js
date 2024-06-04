const dashboard = async(req, res) => {
    const userRole = req.user.role;
    if(userRole === 'Admin') {
         res.json('Welcome Admin');
    }else{
        res.send('Welcome User')
    }
}


const adminDashboard = async(req, res) => {
    if(req.user.role !== 'Admin') return res.sendStatus(403);
    res.send( 'Welcome to Admin dashboard!' );
}

const userDashboard = async(req, res) => {
    if(req.user.role !== 'User') return res.sendStatus(403);
    res.send( 'Welcome to User dashboard!' );
}

module.exports = {
    dashboard,
    adminDashboard,
    userDashboard
}