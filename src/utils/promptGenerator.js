export function createMovieGeneratorPrompt(actorName){
    return `Generate names of some movies where the actor/actress is in the leading role. 
    Actor: Hugh Jackman
    Movie Names: The Wolverine, Les Miserables, X-Men Origins: Wolverine
    Actor: Tom Cruise
    Movie Names: Top Gun, Mission: Impossible, Rain Man
    Actor: Tom Cruise
    Movie Names: Jack Reacher, The Mummy, Edge of Tomorrow
    Actress: Angelina Jolie
    Movie Names: Maleficent, Mr. & Mrs. Smith, Lara Croft: Tomb Raider
    Actor: ${actorName}
    Movie Names:`

}

export default {
    createMovieGeneratorPrompt
}