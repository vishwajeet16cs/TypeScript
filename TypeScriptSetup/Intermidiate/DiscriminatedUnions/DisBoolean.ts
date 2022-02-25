type ValidationSuccess={
    isValid:true,
    validateValue:string,
    
};
type ValidationFailure={
    isValid:false,
    errorReason:string,
};

type ValidationResult =ValidationFailure|ValidationSuccess;
/* type ValidationResult =
|ValidationFailure
|ValidationSuccess;
 */

 function LogResult(result:ValidationResult){
     if(result.isValid===true){
         console.log("Success, Validated value:",result.validateValue)
     }
     if(result.isValid===false){
         console.log("failure, error reason:",result.errorReason);
         
     }
 }
 LogResult({isValid:true,validateValue:"validation completed successfully"})
 LogResult({isValid:false,errorReason:"validation completed successfully"})
 /* 
    o/p-
    Success, Validated value: validation completed successfully
    failure, error reason: validation completed successfully
 */