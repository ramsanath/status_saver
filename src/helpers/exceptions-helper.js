import DeviceInfo from 'react-native-device-info';

import db from '../api/firebase';

export const getDeviceInfo = async () => {
    return {
        timestamp: new Date().getTime(),
        apiLevel: DeviceInfo.getAPILevel(),
        batteryLevel: await DeviceInfo.getBatteryLevel(),
        brand: DeviceInfo.getBrand(),
        model: DeviceInfo.getModel(),
        readableVersion: DeviceInfo.getReadableVersion(),
        systemVersion: DeviceInfo.getSystemVersion(),
        timezone: DeviceInfo.getTimezone(),
        storageSize: DeviceInfo.getTotalDiskCapacity(),
        totalMemory: DeviceInfo.getTotalMemory(),
        uniqueId: DeviceInfo.getUniqueID(),
        buildNumber: DeviceInfo.getBuildNumber(),
        bundleId: DeviceInfo.getBundleId(),
        carrier: DeviceInfo.getCarrier(),
        deviceCountry: DeviceInfo.getDeviceCountry(),
        deviceId: DeviceInfo.getDeviceId(),
        deviceLocale: DeviceInfo.getDeviceLocale(),
        deviceName: DeviceInfo.getDeviceName(),
        firstInstallTime: DeviceInfo.getFirstInstallTime(),
        fontScale: DeviceInfo.getFontScale(),
        freeDiskStorage: DeviceInfo.getFreeDiskStorage(),
        lastUpdateTime: DeviceInfo.getLastUpdateTime(),
        manufacturer: DeviceInfo.getManufacturer(),
        maxMemory: DeviceInfo.getMaxMemory(),
    }
};

export const notifyError = async e => {
    if (!(e instanceof Error)) return;

    let deviceInfo = await getDeviceInfo();

    let key = db.database.ref().push().key;

    db.write('/errors/' + key, {
        name: e.name,
        stack: e.stack,
        message: e.message,
        deviceInfo
    });
};