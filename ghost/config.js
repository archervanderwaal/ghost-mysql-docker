// Ghost Configuration

var devModeUrl = `http://${myIpAddress()}:2368`;
var proModeUrl = 'http' + process.env.BLOG_DOMAIN

export const production = buildConfig(proModeUrl);
export const development = buildConfig(devModeUrl);

if (process.env.NODE_ENV === 'development') {
    console.log(`Configuring development url for Ghost as: ${devModeUrl}`)
}

function buildConfig(url) {
    return {
        url: url,
        database: {
            client: 'mysql',
            connection: {
                host: 'mysql',
                user: 'ghost',
                password: process.env.MYSQL_PASSWORD,
                database: 'ghost_db',
                charset: 'utf8'
            }
        },
        server: {
            host: '0.0.0.0',
            port: '2368'
        },
        storage: {
            active: "qn-store",
            'qn-store': {
                uploadURL: 'http://up-z2.qiniu.com/', 
                accessKey: process.env.QN_STORE_AK,
                secretKey: process.env.QN_STORE_SK,
                bucket: process.env.QN_STORE_BUCKET,
                fileKey: {
                    hashAsBasename: false,
                    safeString     : true,
                    prefix        : "",
                    suffix        : "",
                    extname       : true
                }
            }
        },
        mail: {
            transport: "SMTP",
            options: {
                service: "Gmail",
                auth: {
                  user: process.env.GMAIL_USER,
                  pass: process.env.GMAIL_PASS
              }
            }
        },
        logging: {
            transports: [
              "file",
              "stdout"
            ]
        },
        paths: {
            contentPath: process.env.GHOST_CONTENT
        }
    }
}

/**
 * Get the ipv4-address of the `eth0` device (which should
 * exist in the current docker-setup.
 * @returns {string} the ip-address
 */
function myIpAddress() {
    return require('os')
        .networkInterfaces()
        .eth0
        .filter((iface) => iface.family === 'IPv4')[0]
        .address;
}