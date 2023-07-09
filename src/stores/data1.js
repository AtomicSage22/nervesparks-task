import { writable } from 'svelte/store';

import altroz from '../assets/cars/tata-altroz.webp';
import harrier from '../assets/cars/tata-harrier.webp';
import nexon from '../assets/cars/tata-nexon.webp';
import safari from '../assets/cars/tata-safari.webp';
import tiago from '../assets/cars/tata-tiago.webp';

export const data1 = writable([
	{
		companyName: 'Tata Motors Ltd',
		models: [
			{
				modelName: 'Tata Altroz',
				modelImage: altroz,
				modelDetails: [
					{
						name: 'Price',
						value: 'Rs. 6 Lakh'
					},
					{
						name: 'Mileage',
						value: '23.64 kmpl'
					},
					{
						name: 'Engine',
						value: '1199 to 1497 cc'
					},
					{
						name: 'Safety',
						value: '5 Star (Global NCAP)'
					},
					{
						name: 'Fuel Type',
						value: 'Petrol, CNG & Diesel'
					},
					{
						name: 'Transmission',
						value: 'Manual & Automatic'
					},
					{
						name: '5 Seater'
					}
				]
			},
			{
				modelName: 'Tata Harrier',
				modelImage: harrier,
				modelDetails: {}
			},
			{
				modelName: 'Tata Nexon',
				modelImage: nexon,
				modelDetails: {}
			},
			{
				modelName: 'Tata Safari',
				modelImage: safari,
				modelDetails: {}
			},
			{
				modelName: 'Tata Tiago',
				modelImage: tiago,
				modelDetails: {}
			}
		]
	},
	{
		companyName: 'Maruti Suzuki India Ltd',
		models: []
	},
	{
		companyName: 'Mahindra and Mahindra Ltd',
		models: []
	},
	{
		companyName: 'Bajaj Auto Ltd',
		models: []
	},
	{
		companyName: 'TVS Motor Company Ltd',
		models: []
	}
]);
