class Subscription {
    constructor(subscriptionPlanName) {
        this.subscriptionPlanName = subscriptionPlanName;
    }

    hasProfessionalAccess() { // вернёт true, если подписка профи
        return this.subscriptionPlanName === 'professional';
    }

    hasPremiumAccess() { // вернёт true, если подписка прем
        return this.subscriptionPlanName === 'premium';
    }
}

export default Subscription;