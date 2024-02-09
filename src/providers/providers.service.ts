import { Injectable } from '@nestjs/common';

@Injectable()
export class ProvidersService {
    async getProviders() {
        return 'All providers'
    }
}
