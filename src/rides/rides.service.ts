import { Injectable } from '@nestjs/common';

@Injectable()
export class RidesService {
    async getRides() {
        return 'All Rides'
    }
}
