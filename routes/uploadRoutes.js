const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

const { v4: uuidv4 } = require('uuid');
const requireLogin = require('../middlewares/requireLogin');
const keys = require('../config/keys');

const s3 = new S3Client({
    credentials: {
        accessKeyId: keys.accessKeyId,
        secretAccessKey: keys.secretAccessKey,
    },
    region: 'il-central-1',
});


module.exports = app => {
    app.get('/api/upload', requireLogin, async (req, res) => {
        const key = `${req.user.id}/${uuidv4()}.jpg`;

        const command = new PutObjectCommand({
            Bucket: "s3-blog-bucket",
            Key: key,
            ContentType: 'image/jpeg',
        });

        const url = await getSignedUrl(s3, command, { expiresIn: 3600 });

        res.send({ key, url });
    })
}