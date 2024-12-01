import nodemailer from 'nodemailer'
import ENVIROMENT from '../config/enviroment.config.js'

const trasporterEmail = nodemailer.createTransport({
    service: 'gmail',
    tls: {
        rejectUnauthorized: false
    },
    auth: {
        user: ENVIROMENT.EMAIL_USER,
        pass: ENVIROMENT.EMAIL_PASSWORD,
    }
})


const sendVerifyMail = async(email, redirectUrl)=> {
    return await trasporterEmail.sendMail({
        subject: 'Valida tu email',
        to: email,
        html: `
            <h1>Valida tu mail</h1>
            <p>Para validar tu mail da click <a href='${redirectUrl}'>aqui</a></p>
        `
    })
}

const sendForgotPasswordMail = async(email, resetUrl) =>{
    return await trasporterEmail.sendMail({
        subject: 'Recuperar password',
        to: user.email,
        html:`<a href=${resetUrl}> Recuperar </a>`
    })
}
export {sendVerifyMail, sendForgotPasswordMail};