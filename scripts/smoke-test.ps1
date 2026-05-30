$base='http://localhost:3000'
$routes=@('institution','script','scriptexec','interface','operinterface','itensifc','cliente','cliinterface','projeto','image')
foreach($r in $routes){
    Write-Output "== $r =="
    try{
        $resp=Invoke-WebRequest -Uri "$base/$r/1" -Method GET -UseBasicParsing -TimeoutSec 10 -ErrorAction Stop
        Write-Output "GET /$r/1 -> $($resp.StatusCode)"
    } catch {
        if ($_.Exception.Response) { try{ $sc = ($_.Exception.Response).StatusCode.value__ } catch { $sc='?' } ; Write-Output "GET /$r/1 -> $sc" } else { Write-Output "GET /$r/1 -> ERROR: $_" }
    }
    try{
        $resp=Invoke-WebRequest -Uri "$base/$r" -Method POST -Body '{}' -ContentType 'application/json' -UseBasicParsing -TimeoutSec 10 -ErrorAction Stop
        Write-Output "POST /$r -> $($resp.StatusCode)"
    } catch {
        if ($_.Exception.Response) { try{ $sc = ($_.Exception.Response).StatusCode.value__ } catch { $sc='?' } ; Write-Output "POST /$r -> $sc" } else { Write-Output "POST /$r -> ERROR: $_" }
    }
}
# Check documentation
try{ $d=Invoke-WebRequest -Uri "$base/doc" -Method GET -UseBasicParsing -TimeoutSec 10 -ErrorAction Stop; Write-Output "GET /doc -> $($d.StatusCode)" } catch { Write-Output "GET /doc -> ERROR" }
