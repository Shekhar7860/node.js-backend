export const CONTINENTS = [
	'Asia',
	'Europe',
	'Africa',
	'Australia',
	'North America',
	'South America',
	'Antartica',
	'CIS',
	'Australasia',
	'Latin America',
];

export const YEARS = [
         "1975",
         "1976",
         "1977",
         "1978",
         "1979",
         "1980",
         "1981",
         "1982",
         "1983",
         "1984",
         "1985",
         "1986",
         "1987",
         "1988",
         "1989",
         "1990",
         "1991",
         "1992",
         "1993",
         "1994",
         "1995",
         "1996",
         "1997",
         "1998",
         "1999",
         "2000",
         "2001",
         "2002",
         "2003",
         "2004",
         "2005",
         "2006",
         "2007",
         "2008",
         "2009",
         "2010",
         "2011",
         "2012",
         "2013",
         "2014",
         "2015",
         "2016",
         "2017",
         "2018",
         "2019",
         "2020",
         "2021",
        //  "2022",
        //  "2023",
        //  "2024",
        //  "2025",
        //  "2026",
        //  "2027",
        //  "2028",
        //  "2029",
        //  "2030",
       ];
export const BOOK_DISTRIBUTION_REPORTING_LEVEL = ['Individual', 'Group'];
export const GROUP_TYPE = [
	'Book Distribution',
	'Temple',
	'Outreach',
	'Country',
	'Continent',
	'Global',
	'Weekend Warrior',
];
export const MEDIA_TYPE = ['Book', 'Website', 'Audio', 'Video'];
export const SANKIRTAN_GROUP_TYPE = [
	'Corporate',
	'Door to Door',
	'Kids',
	'Kirtan',
	'Motel',
	'Other',
	'Weekend Warriors',
	'Congregational Preaching',
	'Shastra Dana',
];
export const COUNTRIES = ['United States'];
export const COMMUNITY_TYPES = ['Gated', 'Non Gated'];
export const COVERAGE_PERCENTAGE = ['100%', '75%', '50%', '25%'];
export const INITIATION_LEVEL = [
	'Aspiring',
	'Initiated-Harinam',
	'Initiated-Mantra',
	'None',
];
export const GROUP_STATUS = ['Active', 'Archived'];
export const MARITAL_STATUS = [
	'Single',
	'Engaged',
	'Married',
	'Widowed',
	'Divorced',
	'Separated',
	'Defacto',
	'Sannyasa',
];
export const PERIOD_STATUS = ['Open', 'Closed'];
export const TRANSACTION_STATUS = ['Active', 'Draft', 'Cancelled'];
export const TRANSACTION_ACTION = ['Add', 'Update', 'Cancel'];
export const GROUP_SIZE = ['Large', 'Medium', 'Small', 'Maha-Small'];
export const ADDRESS_TYPE = [
	'Home Program',
	'Hospital',
	'Motel',
	'Prison',
	'Festival-Diwali',
	'Festival-Pumpkin',
	'Shop',
	'Street Sankirtan',
	'Temple',
	'University',
	'Apartment',
	'Town home',
	'Single Family Home',
];
export const BOOK_TYPE = [
	'Set',
	'Large',
	'Medium',
	'Small',
	'M-Big',
	'BTG',
	'Big',
	'Magazines',
];
export const BOOK_LANGUAGE = [
	'Afrikaans',
	'Albanian',
	'Arabic',
	'Armenian',
	'Assamese',
	'Azerbaijani',
	'Bashkir',
	'Bengali',
	'Bulgarian',
	'Byelorussian',
	'Burmese',
	'Chinese',
	'Chinese (Western world sales)',
	'Chuvash',
	'Croatian',
	'Czech',
	'Danish',
	'Dutch',
	'English',
	'Estonian',
	'Farsi',
	'Finnish',
	'French',
	'Georgian',
	'German',
	'Greek',
	'Gujarati',
	'Hebrew',
	'Hindi',
	'Hungarian',
	'Icelandic',
	'Indonesian',
	'Italian',
	'Japanese',
	'Kannada',
	'Karakalpak',
	'Kazakh',
	'Khmer',
	'Kirgiz',
	'Korean',
	'Latvian',
	'Lao',
	'Lithuanian',
	'Macedonian',
	'Malayalam',
	'Manipuri',
	'Marathi',
	'Mauritius Creole',
	'Mongolian',
	'Nepali',
	'Newari',
	'Norwegian',
	'Oriya',
	'Pidgin English',
	'Polish',
	'Portuguese',
	'Romanian',
	'Russian',
	'Serbian',
	'Serbo-Croatian',
	'Sindhi',
	'Singhalese',
	'Slovak',
	'Slovene',
	'Spanish',
	'Swahili',
	'Swedish',
	'Tajik',
	'Tamil',
	'Tatar',
	'Telugu',
	'Thai',
	'Tibetan',
	'Tswana',
	'Turkish',
	'Turkmen',
	'Udmurt',
	'Ukranian',
	'Urdu',
	'Uzbekh',
	'Vietnamese',
	'Xhosa',
	'Zulu',
];

export function showParticularGroups (groups, id) {
	const user_info = JSON.parse(localStorage.getItem('user_info'));
	let selectedGroups = [];
		for(let group in groups)
		{
		for(let member in groups[group].group_members) {
			 if(id == groups[group].group_members[member].people){
				// console.log('sel group', 'gr', groups[group].name, groups[group].group_members[member].position)
				selectedGroups.push({groupName :  groups[group].name, position : groups[group].group_members[member].position, peopleId : groups[group].group_members[member].people, groupId : groups[group].group_members[member].group}) 
				break;
			 }
		}
		}
		return selectedGroups
}
