const region = require('../models/region');
const district = require('../models/district');
const ward = require('../models/ward');
const village = require('../models/village');

let regionData = async (regionName) => {
    try {
        let newRegion = await region.create({ region: regionName });
        console.log('Region Created:', newRegion.toJSON());

    await districtData(newRegion.region_id, newRegion.region );
    }
    catch (err) {
        console.log('Error:', err);
    }};

let districtData = async (region_id,regionName) => {
    try {
        let districtNew = await district.create({district: 'Mpombo',region_id: region_id,});
        console.log('District Created:', districtNew.toJSON());

    await wardData(districtNew.district,districtNew.district_id,regionName,region_id);
} 
catch (err) {
    console.log('Error:', err);
}};

let wardData = async (district,district_id,regionName,region_id) => {
    try {
        let wardNew = await ward.create({
            ward: 'Kenya DC',district_id:district_id,});
            console.log('Ward Created:', wardNew.toJSON());

await villageData(region_id,regionName,district,district_id,wardNew.ward, wardNew.ward_id);
}
 catch (err) {
    console.log('Error:', err);
}};

let villageData = async (region_id,regionName,district,district_id,wardName,ward_id) => {
    try {
        let villagenew = await village.bulkCreate([
            {
                region: regionName,
                district: district,
                ward: wardName,
                village: 'Ijoka',
                minCurrent: 41000,
                maxCurrent: 44000,
                minLast: 42000,
                maxLast: 45000,
                crop: 'Crop1',
                variety: 'Variety1',
                region_id: region_id,
                district_id: district_id,
                ward_id: ward_id,
            },
            {
                region: regionName,
                district: district,
                ward: wardName,
                village: 'Vyshkanagar',
                minCurrent: 41000,
                maxCurrent: 44000,
                minLast: 42000,
                maxLast: 45000,
                crop: 'Crop2',
                variety: 'Variety2',
                region_id: region_id,
                district_id: district_id,
                ward_id: ward_id,
            },
            {
                region: regionName,
                district: district,
                ward: wardName,
                village: 'village 0',
                minCurrent: 41000,
                maxCurrent: 44000,
                minLast: 42000,
                maxLast: 45000,
                crop: 'Crop3',
                variety: 'Variety3',
                region_id: region_id,
                district_id: district_id,
                ward_id: ward_id,
            },
            {
                region: regionName,
                district: district,
                ward: wardName,
                village: 'Village A',
                minCurrent: 41000,
                maxCurrent: 44000,
                minLast: 42000,
                maxLast: 45000,
                crop: 'Crop4',
                variety: 'Variety4',
                region_id: region_id,
                district_id: district_id,
                ward_id: ward_id,
            },
            {
                region: regionName,
                district: district,
                ward: wardName,
                village: 'Village B',
                minCurrent: 41000,
                maxCurrent: 44000,
                minLast: 42000,
                maxLast: 45000,
                crop: 'Crop5',
                variety: 'Variety5',
                region_id: region_id,
                district_id: district_id,
                ward_id: ward_id,
            }
        ]);
        console.log('Villages :', villagenew.map(village=>village.toJSON()))
    } 
    catch (err) {
        console.log('Error:', err);
    }
};
module.exports = { regionData, districtData, wardData, villageData };