const TesteApi = () => {
    function tempo (request, response) {
        const dynamicDate = new Date();
    
        response.json({
            date: dynamicDate.toGMTString()
        })
    }


    return (
        <>
            <h1>{tempo}</h1>
        </>
    )
}

export default TesteApi