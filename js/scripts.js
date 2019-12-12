const companies = [{
    name: 'Company A',
    requirements: [
        ['an apartment', 'house'],
        ['property insurance']
    ]
}, {
    name: 'Company B',
    requirements: [
        ['5 door car', '4 door car'],
        ['driving license'],
        ['car insurance']
    ]
}, {
    name: 'Company C',
    requirements: [
        ['5 door car', '4 door car'],
        ['a drivers license'],
        ['car insurance']
    ]
}, {
    name: 'Company D',
    requirements: [
        ['an apartment', 'a flat', 'a house']
    ]
}, {
    name: 'Company E',
    requirements: [
        ['a drivers license'],
        ['a 2 door car', 'a 3 door car', 'a 4 door car', 'a 5 door car']
    ]
}, {
    name: 'Company F',
    requirements: [
        ['a scooter', 'a bike', 'a motorcycle'],
        ['a drivers license'],
        ['motorcycle insurance']
    ]
}, {
    name: 'Company G',
    requirements: [
        ['a massage qualification certificate'],
        ['a liability insurance']
    ]
}, {
    name: 'Company H',
    requirements: ['a storage place', 'a garage']
}, {
    name: 'Company J',
    requirements: ['-']
}, {
    name: 'Company K',
    requirements: ['a PayPal account']
}, {
    name: 'Company L',
    requirements: ['bike', 'a drivers license']
}, ];


const skills = ['bike', 'a drivers license', '-'];

const filter = (companies, skills) => {
    return companies.filter((company) => {
        return company.requirements.every((req) => {
			return skills.some((personTrait) => {
				return req.includes(personTrait);
			});
        });
    });
}

const filterCompanyOnLoad = (companyId) => {
    return companyId.requirements.every((req) => {
        return skills.some((personTrait) => {
			return req.includes(personTrait);
        });
    });
}

const createCompaniesScene = (companies) => {
    const companiesWrapper = document.getElementById('companies');
    companies.forEach(function (element, index) {
        let companyMatchResult = filterCompanyOnLoad(element);
        let companyMatchResultClass = companyMatchResult ? 'is-green' : 'is-red';
        companiesWrapper.innerHTML += `<tr><td>${index+1}</td><td>${element.name}</td><td>${element.requirements}</td><td class="${companyMatchResultClass} is-last">${companyMatchResult}</td></tr>`;
    });
}

createCompaniesScene(companies);