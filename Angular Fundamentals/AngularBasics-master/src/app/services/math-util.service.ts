import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MathUtilService {
    public sumOfTwo(first: number, second: number): number {
        return first + second;
    }

    public differenceOfTwo(first: number, second: number): number {
        return first - second;
    } 

    public productOfTwo(first: number, second: number): number {
        return first * second;
    }

    public divisionOfTwo(first: number, second: number): number {
        return first / second;
    }
}