const index = async (req, res) => {
    try {
        res.render('admin/category/view_category');
    } catch (error) {
        console.log(error)
    }
}

module.exports = index