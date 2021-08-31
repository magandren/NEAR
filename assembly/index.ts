//my smart contraxt code goes here
import{ PersistentVector} from "near-sdk-as";

@nearBindgen
class PostedMelody {
    userID: string
    notes: string
}

export const Melodies = new PersistentVector<PostedMelody>("m");

//Add a new set of  melodies under id 
export function add_Melody(text: string, user: string):void{
    const melody = new PostedMelody()
    melody.notes  = text
    melody.userID = user
    Melodies.push(melody)
}

//Return array of the last N messages (from Guest Book)
export function  getMelody(): PostedMelody[] {
    const limit = min(10,Melodies.length)
    const startIndex = Melodies.length - limit;
    const result = new Array<PostedMelody>(limit);
    for (let i = 0;  i  < limit; i++){
        result[i] = Melodies[i + startIndex]
    }
    return result;
}