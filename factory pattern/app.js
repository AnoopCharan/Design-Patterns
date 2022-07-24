// Factory pattern/ method
// sub classes can define which classes to instantiate
// factory pattern is often used to manage and maintian which are different but common characteristics
// like subscription website backend

function MemberFactory() {
    this.createMember = function(name, type) {
        let member;

        if(type === 'simple') {
            member = new SimpleMembership(name);
        } else if (type === 'standard') {
            member = new StandardMembership(name);
        } else if (type === 'super') {
            member = new SuperMembership(name);
        }

        member.type = type;
        member.define = function() {
            console.log(`${this.name} (${this.type}) : ${this.cost}`)
        }

        return member;
    }
}

const SimpleMembership = function(mname) {
    this.name = mname;
    this.cost = '$5';
}


const StandardMembership = function(mname) {
    this.name = mname;
    this.cost = '$15';
}


const SuperMembership = function(mname) {
    this.name = mname;
    this.cost = '$25';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('anoop', 'super'));
members.push(factory.createMember('mouni', 'standard'));

// console.log(members);

members.forEach((member) => member.define() );