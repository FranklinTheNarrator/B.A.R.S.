using Microsoft.AspNetCore.Mvc;
using backend.Services;

namespace backend.Controllers;

[ApiController]
[Route("")]
public class HealthController : ControllerBase
{
    private readonly IHostEnvironment _env;
    private readonly ITicketService _ticketService;

    public HealthController(IHostEnvironment env, ITicketService ticketService)
    {
        _env = env;
        _ticketService = ticketService;
    }

    [HttpGet("health")]
    public IActionResult Health() => Ok("ok");

    [HttpGet("info")]
    public IActionResult Info() => Ok(new
    {
        app = "B.A.R.S. - проверка функционального состояния",
        environment = _env.EnvironmentName,
        lab = "ЛР7",
        service = _ticketService.Ping()
    });
}