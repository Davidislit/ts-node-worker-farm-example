import { Service } from "./service";

export function execute({ uuid, number, timeout }, callback) {
    const service = new Service(uuid, number, timeout);
    callback(null, 'Worker executed!');
}