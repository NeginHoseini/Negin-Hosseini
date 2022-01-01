<?php
if (isset($_REQUEST['input'])) {
    $userInput = $_REQUEST['input'];
    try
    {
        echo calculator($userInput);
    }
    catch (ParseError $e)
    {
        echo "Enter Valid Input!";
    }
    catch (Error $e)
    {
        echo $e->getMessage();
    }
}

function calculator($userInput)
{
    $res = "Enter Something!";
    if ($userInput != ""){
        $res = @eval("return " . $userInput . ";");
    }
    return $res;
}

echo "<br><br><a href='index.html'>Back</a>";