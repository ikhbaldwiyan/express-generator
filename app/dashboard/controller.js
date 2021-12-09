const index = async (req, res) => {
    try {
        res.render('index', { title: 'Dashboard' });
    } catch (error) {
        console.log(error)
    }
}

module.exports = index