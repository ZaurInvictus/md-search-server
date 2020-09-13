exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('listings').del()
      .then(function () {
        // Inserts seed entries
        return knex('listings').insert([
          {
            title: 'Doctor', 
            employer: 'Prod Doc',
            employer_website: 'www.spacecraftbrands.com',
            employer_logo: 'link to the logo',
            employer_logo_public_id: '123',
            hospital: '123456',
            type: 'Emergency',
  
            description: 'lorum ipsum',
            location: 'whatever it is',
            address: 'Ingram 20',
            city: 'Houston',
            state: 'TX',
            zip: '77403',

            pay_amount:'$60 000',
            pay_type: 'Hourly',
            shift_length: '8 hours',
            shift_amount: '12',
            application_email: 'test@gmail.com',
            user_id: '1'
          },
          {
            title: 'Nurse', 
            employer: 'MD Anderson',
            employer_website: 'www.google.com',
            employer_logo: 'link to the logo',
            employer_logo_public_id: '123',
            hospital: '123456',
            type: 'Emergency',
  
            description: 'lorum ipsum',
            location: 'whatever it is',
            address: 'Ingram 20',
            city: 'Houston',
            state: 'TX',
            zip: '77403',

            pay_amount:'$60 000',
            pay_type: 'Hourly',
            shift_length: '8 hours',
            shift_amount: '12',
            application_email: 'test@gmail.com',
            user_id: '2'
          },
          {
            title: 'Third title', 
            employer: 'MD Anderson',
            employer_website: 'www.google.com',
            employer_logo: 'link to the logo',
            employer_logo_public_id: '123',
            hospital: '123456',
            type: 'Emergency',
  
            description: 'lorum ipsum',
            location: 'whatever it is',
            address: 'Ingram 20',
            city: 'Houston',
            state: 'TX',
            zip: '77403',

            pay_amount:'$60 000',
            pay_type: 'Hourly',
            shift_length: '8 hours',
            shift_amount: '12',
            application_email: 'test@gmail.com',
            user_id: '1'
          },
        ])
      })
  }