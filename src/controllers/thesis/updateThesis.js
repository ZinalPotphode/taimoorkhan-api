import prisma from "../../../prisma/index.js";

const updateThesis = async (req, res) => {
    try {
        const upd = await prisma.thesis.update({
            where: {
                id: req.params.id
            },
            data: {
                holder: req.body?.holder,
                status: req.body?.status,
                topic: req.body?.topic,
                regId: req.body?.regId,
                role: req.body?.role
            }
        });
        res.status(200).send("Done");
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default updateThesis;