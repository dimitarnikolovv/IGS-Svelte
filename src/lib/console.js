const year = new Date().getFullYear();
console.log('%cIGS', 'font-size:200px; background-color:black; color:white;');
console.log(
    '%cproduction',
    'font-size: 30px; color:white; background-color: black; text-transform: uppercase; margin-inline-start: 90px; padding: 5px;'
);
console.log(
    `%cAll rights reserved ${year} IGS Production ©.
             Made by Infrablu.            `,
    'background-color: #04052e; color: white; padding: 10px; margin-inline-start: 35px;'
);
