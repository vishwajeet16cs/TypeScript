abstract class Command{
    abstract commandLine(): string;
    execute(){
        console.log('Execute:', this.commandLine());
    }
}


/* class GitResetCommand extends Command{

} 
  ->>Non-abstract class 'GitResetCommand' does not implement
   inherited abstract member 'commandLine' from class 'Command'
*/
class GitResetCommand extends Command{
    commandLine(){
        return "git reset --hard";
    }
} 

class GitFetchCommand extends Command{
    commandLine(): string {
        return "git fetch --all"
    }
}

new GitFetchCommand().execute()
new GitResetCommand().execute()

// new Command();//Error: Can't create an instance of an abstract class