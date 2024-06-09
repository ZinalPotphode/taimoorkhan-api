import prisma from "../../../prisma/index.js";

const deleteEditorial = async (req, res) => {
    try {
        const del = await prisma.editorial.delete({
            where: {
                id: req.params.id
            }
        });
        res.status(200).send("Done");
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default deleteEditorial;